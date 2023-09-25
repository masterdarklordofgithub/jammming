/*Added Tracks will end up here, added in a new Tracklist*/
/*Save to Spotify button will be here too.*/
import React, { useCallback } from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist(props) {

    //const [tracks, setTracks] = useState(props.songs)

    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    return (
        <form className={styles.PlaylistContainer}>

            <div className={styles.TitleDiv}>
                <input
                    onChange={handleNameChange}
                    className={styles.InputPlayListTitle}
                //defaultValue={props.playlistName}
                />
            </div>

            <div className={styles.PlaylistContent}>
                <TrackList
                    tracks={props.playlistTracks}
                    sign={"-"}
                    onRemove={props.onRemove}
                />
            </div>

            <div className={styles.BottomDiv}>
                <input
                    type="submit"
                    value="Add Playlist"
                    className={[styles.AddButton, styles.button].join(" ")}
                    onClick={props.onSave}
                />
            </div>
        </form>
    );
};
export default Playlist;