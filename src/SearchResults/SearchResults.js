/*List of Tracks*/
import React, { useState } from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

function SearchResults(props) {
    const [tracks, setTracks] = useState(props.songs.songs)
    // const tracks = [
    //     {
    //         name: "xxxxx",
    //         artist: "xxxxartistyo",
    //         album: "albumyoyo",
    //         id: "123xxxx"
    //     },
    //     {
    //         name: "Track2xxxx",
    //         artist: "artistyupupo",
    //         album: "XXXalbumyoyo",
    //         id: "99xxx9"
    //     },
    //     {
    //         name: "XoXO",
    //         artist: "artistyoXOOOO",
    //         album: "alb9999umyoyo",
    //         id: "WAAAAAA"
    //     }
    // ]

    return (
        <div className={styles.Results}>
            <div className={styles.HeaderDiv}>
                <h4 className={styles.H3Text}>Results</h4>
            </div>
            <div className={styles.SearchContent}>
                <TrackList tracks={tracks} sign="+" />
            </div>
        </div>
    )
}
export default SearchResults;
