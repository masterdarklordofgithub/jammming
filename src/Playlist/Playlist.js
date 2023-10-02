import React, { useCallback } from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist(props) {
    //callback function, handleNameChange(), which updates the state variable for the playlist name.
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        }, [props.onNameChange]
    );

    return (
        <div name="PlaylistForm" id="PlaylistForm" className={styles.PlaylistContainer}> {/*onSubmit={props.onSave}>*/}

            <div className={styles.TitleDiv}>
                <input
                    name="PlaylistTitle"
                    placeholder="Enter playlist title"
                    onChange={handleNameChange}
                    className={styles.InputPlayListTitle}
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
                    name="AddPlaylist"
                    type="submit"
                    value="Add Playlist"
                    className={[styles.AddButton, styles.button].join(" ")}
                    onClick={props.onSave}
                />
            </div>
        </div>
    );
};
export default Playlist;