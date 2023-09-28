import React, { useCallback, useState } from "react";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

import Spotify from '../Spotify/Spotify';

import Songs from '../mockSongs.json';
import './App.css';


function App() {

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [songName, setSongName] = useState('');

  const [tracks, setTracks] = useState([]);


  const uriArray = Songs.map((song) => {
    return song.uri;
  })

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
    //setPlaylistName(name);
    //console.log(name);
    //console.log(playlistName);
    //console.log(uriArray);
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

  const searchTracks = useCallback(async (event) => {
    const response = await Spotify.getTracks(songName);
    setTracks(await response.items);
    console.log(tracks);
  })

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          setSongName={setSongName}
          onSearchTracks={searchTracks}
        />

        <div className="Music-content">
          <SearchResults
            songs={tracks}
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
