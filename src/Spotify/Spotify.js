require('dotenv').config();

//const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = 'http://localhost:3000/';
const scope = 'playlist-modify-public playlist-modify-private';
let accessToken;


const Spotify = {


    async getTokenAndAuth() {
        // Check if the access token is already set
        if (accessToken) {
            return accessToken;
        }

        // Check the URL for access token and expiration time parameters
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        // If access token and expiration time parameters are found, set the access token and expiration time
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // Set a timeout to clear the access token after the expiration time has elapsed
            window.setTimeout(() => accessToken = '', expiresIn * 1000);

            // Clear the URL parameters to prevent the access token from being reused
            window.history.pushState('Access Token', null, '/');

            // Return the access token
            return accessToken;
        } else {
            // If access token and expiration time parameters are not found, redirect the user to the Spotify authentication page
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    async getTracks(searchString) {

        if (!accessToken) {
            await Spotify.getTokenAndAuth();
        }
        console.log(accessToken)

        if (accessToken) {

            try {

                if (accessToken) {
                    console.log(accessToken)
                    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchString}&type=track&market=se`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    const jsonResponse = await response.json();
                    const tracks = jsonResponse.tracks;
                    return tracks;

                }
            } catch (error) {
                return error;
            }
        }

    },
    async createPlaylist(playlistName, userId) {
        //2. create new playlist: POST /v1/users/{user_id}/playlists, set name & description in request body
        const playlistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
        try {
            const response = await fetch(playlistUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'name': `${playlistName}`,
                    'description': 'Playlist created from my self made edit Spotify app',
                    'public': false
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const playlistId = jsonResponse.id;
            console.log(`playlistId in createPlaylist: ${playlistId}`);
            return playlistId;
        } catch (error) {
            console.log(`Error posting playlist: ${error}`)
        }
    },
    async addTracksToPlaylist(playlistId, userId, listOfTrackIds) {
        console.log(`playlistId in addTracksToPlaylist: ${playlistId}`);

        const trackIdsFormatted = listOfTrackIds.map((track) => `spotify:track:${track}`);
        const playlistToAddSongs = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`
        try {
            const response = await fetch(playlistToAddSongs, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'uris':
                        trackIdsFormatted,

                    'position': 0
                })
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        } catch (error) {
            console.log(`Error posting tracks to playlist: ${error}`)
        }
    },

    async savePlaylist(playListName, listOfTrackIds) {
        if (!playListName || !listOfTrackIds.length) {
            return;
        }
        let userId;


        const apiUrl = 'https://api.spotify.com/v1/me';
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            if (!response.ok) {
                console.log(`Access token in savePlaylist: ${accessToken}`)
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const jsonResponse = await response.json();
            userId = jsonResponse.id;
            console.log('User ID:', userId);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }

        //2. create new playlist: POST /v1/users/{user_id}/playlists, set name & description in request body
        const playlistId = await this.createPlaylist(playListName, userId);


        //3. To add tracks make POST to the //v1/users/{user_id}/playlists/{playlist_id}/tracks endpoint.
        //Provide list of track IDs in request body to add them to playlist
        this.addTracksToPlaylist(playlistId, userId, listOfTrackIds);

    }
}





export default Spotify;