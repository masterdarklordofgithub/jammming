import React, { useCallback, useState } from "react";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import songs from '../mockSongs.json';
import './App.css';


function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;


  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
    console.log(name);
    console.log(playlistName);
  }, [playlistName]);

  const savePlaylist = useCallback((event) => {
    // const trackUris = playlistTracks.map((track) => track.uri);
    // Spotify.savePlaylist(playlistName, trackUris).then(() => {
    //   setPlaylistName("New Playlist");
    //   setPlaylistTracks([]);
    // });

    //Prevent clearing of playlist on click 'add playlist':
    //event.preventDefault();

    setPlaylistName(playlistName);
    //setPlaylistTracks(playlistTracks);
    console.log(playlistName);

  }, [playlistName, playlistTracks]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />

        <div className="Music-content">
          <SearchResults
            songs={songs}
            onAdd={addTrack}
          />

          <Playlist
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
