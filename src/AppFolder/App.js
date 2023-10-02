import React, { useCallback, useState } from "react";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../Spotify/Spotify';
import styles from './App.module.css';

function App() {

  // Define state variables using the useState hook
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [songName, setSongName] = useState('');
  const [tracks, setTracks] = useState([]);

  // Define a callback function to add a track to the playlist
  const addTrack = useCallback(
    (track) => {
      // Check if the track is already in the playlist
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      // Add the track to the playlist
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);

      //Remove the track from the search results
      setTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
    },
    [playlistTracks]
  );

  // Define a callback function to remove a track from the playlist
  const removeTrack = useCallback((track) => {
    // Filter out the track with the specified ID
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  // Define a callback function to update the playlist name
  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, [playlistName]);

  // Define a callback function to save the playlist to Spotify
  const savePlaylist = useCallback(async (event) => {
    event.preventDefault();
    const listOfPlaylistTrackIds = playlistTracks.map((track) => track.id)

    console.log(listOfPlaylistTrackIds);

    const response = await Spotify.savePlaylist(playlistName, listOfPlaylistTrackIds);
    console.log(response)

  }, [playlistName, playlistTracks]);

  // Define a callback function to search for tracks on Spotify
  const searchTracks = useCallback(async (event) => {
    let response;
    let items;
    event.preventDefault();
    if (songName) {
      try {
        //TODO: in Spotify object find a better way for authentication(one time app start way?) and use the separate way to acquire the access token without returning it in the URL.
        response = await Spotify.getTracks(songName);

      } catch (error) {
        console.log(tracks)
        console.error(error);
      }
      items = await response.items;
      //Filter out tracks from searchResults that are added to or already are in the playlist
      items = items.filter((track) => !playlistTracks.some((savedTrack) => savedTrack.id === track.id));

      if (items) {
        setTracks(items);
      }

    }

  })

  return (
    <div>
      <header className={styles.AppHeader}>
        <SearchBar
          setSongName={setSongName}
          onSearchTracks={searchTracks}
        />

        <div className={styles.MusicContent}>
          <SearchResults
            songs={tracks}
            onAdd={addTrack}
          />

          <Playlist
            title="My Playlist"
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>

      </header>

    </div>
  );
}

export default App;
