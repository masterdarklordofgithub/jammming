import React, { useCallback } from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist({ onNameChange, playlistTracks, onRemove, onSave }) {
    //callback function, handleNameChange(), which updates the state variable for the playlist name.
    const onChange = useCallback(
        (event) => {
            onNameChange(event.target.value);
        }, [onNameChange]
    );

    return (
        <div name="PlaylistForm" id="PlaylistForm" className={styles.PlaylistContainer}> {/*onSubmit={props.onSave}>*/}

            <div className={styles.TitleDiv}>
                <input
                    name="PlaylistTitle"
                    placeholder="Enter playlist title"
                    onChange={onChange}
                    className={styles.InputPlayListTitle}
                />
            </div>

            <div className={styles.PlaylistContent}>
                <TrackList
                    tracks={playlistTracks}
                    sign={"-"}
                    onRemove={onRemove}
                />
            </div>

            <div className={styles.BottomDiv}>
                <input
                    name="AddPlaylist"
                    type="submit"
                    value="Add Playlist"
                    className={[styles.AddButton, styles.button].join(" ")}
                    onClick={onSave}
                />
            </div>
        </div>
    );
};
export default Playlist;