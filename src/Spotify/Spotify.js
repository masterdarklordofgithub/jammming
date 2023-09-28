require('dotenv').config();

const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const client_id = process.env.REACT_APP_CLIENT_ID;
const redirectUri = 'http://localhost:3000/';

let accessToken;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");


const Spotify = {

    //
    async auth() {
        try {
            const response = await fetch("https://accounts.spotify.com/api/token", {
                body: "grant_type=client_credentials&client_id=" + client_id + "&client_secret=" + client_secret,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST"
            })
            const status = response.status;
            const data = await response.json();
            accessToken = data.access_token;
            return { data, status };
        } catch (error) {
            // If 401 - faulty token - then fetch new access token
            if (error.response.status === 401) {
                this.auth();
            }
            else {
                return error;
            }
        }
    },

    async getTracks(searchString) {

        try {
            await this.auth();
            if (accessToken) {
                const response = await fetch(`https://api.spotify.com/v1/search?q=${searchString}&type=track&market=se`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                const jsonResponse = await response.json();
                const tracks = jsonResponse.tracks;
                console.log(tracks);
                return tracks;

            }
        } catch (error) {
            return error;
        }
    }
}





export default Spotify;