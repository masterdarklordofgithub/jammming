/*Added Tracks will end up here, added in a new Tracklist*/
/*Save to Spotify button will be here too.*/
import React, { useState } from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist(props) {

    const [tracks, setTracks] = useState(props.songs.songs)

    // const tracks = [
    //     {
    //         name: "Track6666",
    //         artist: "artistyo",
    //         album: "albumyoyo",
    //         id: "123xxxx"
    //     },
    //     {
    //         name: "Track2",
    //         artist: "artistyo",
    //         album: "albumyoyo",
    //         id: "999"
    //     },
    //     {
    //         name: "Track3",
    //         artist: "artistyo",
    //         album: "albumyoyo",
    //         id: "444"
    //     }
    // ]

    return (
        <form className={styles.PlaylistContainer}>

            <div className={styles.TitleDiv}>
                <input
                    className={styles.InputPlayListTitle}
                    type="text"
                    placeholder="Title" />
            </div>

            <div className={styles.PlaylistContent}>
                <TrackList tracks={tracks} sign={"-"} />
            </div>

            <div className={styles.BottomDiv}>
                <input type="submit" value="Add Playlist" className={[styles.AddButton, styles.button].join(" ")} />
            </div>
        </form>
    );
};
export default Playlist;