import React, { useCallback, useState } from "react";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import songs from '../mockSongs.json';
import './App.css';

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState();



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
    console.log(playlistName);
  }, []);

  const savePlaylist = useCallback(() => {
    // const trackUris = playlistTracks.map((track) => track.uri);
    // Spotify.savePlaylist(playlistName, trackUris).then(() => {
    //   setPlaylistName("New Playlist");
    //   setPlaylistTracks([]);
    // });
    setPlaylistName(playlistName);
    setPlaylistTracks(playlistTracks);

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
