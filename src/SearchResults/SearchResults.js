/*List of Tracks*/
import React from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

function SearchResults(props) {
    //const [tracks, setTracks] = useState(props.songs)
    const tracks = props.songs;

    // const addSongToPlayList = (song) => {
    //     setTracks((prev) => {
    //         return [song, ...prev];
    //     });
    // };

    return (
        <div className={styles.Results}>
            <div className={styles.HeaderDiv}>
                <h4 className={styles.H3Text}>Results</h4>
            </div>
            <div className={styles.SearchContent}>
                <TrackList
                    tracks={tracks}
                    sign="+"
                    onAdd={props.onAdd}
                />
            </div>
        </div>
    )
}
export default SearchResults;
