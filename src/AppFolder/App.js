import React, { useCallback, useState } from "react";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../Spotify/Spotify';
import styles from './App.module.css';

function App() {

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [songName, setSongName] = useState('');
  const [tracks, setTracks] = useState([]);

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
  }, [playlistName]);


  const savePlaylist = useCallback(async (event) => {
    event.preventDefault();
    const listOfPlaylistTrackIds = playlistTracks.map((track) => track.id)

    //got error on POST in spotify when added songs with id to playlist.
    console.log(listOfPlaylistTrackIds);

    const response = await Spotify.savePlaylist(playlistName, listOfPlaylistTrackIds);
    console.log(response)

  }, [playlistName, playlistTracks]);

  const searchTracks = useCallback(async (event) => {
    let response;
    event.preventDefault();
    if (songName) {
      try {
        response = await Spotify.getTracks(songName);

      } catch (error) {
        console.log(tracks)
        console.error(error);
      }
      setTracks(await response.items);
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
