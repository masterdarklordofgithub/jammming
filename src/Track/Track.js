import React, { useCallback } from 'react';
import styles from './Track.module.css';

// Define a functional component called Track, which receives a props object as an argument
const Track = ({ track, sign, onAdd, onRemove }) => {
    // Define a useCallback hook for the addTrack function, which calls the onAdd callback function passed in as a prop with the current track object as an argument
    const addTrack = useCallback(
        (event) => {
            onAdd(track);
        },
        [onAdd, track]
    );

    // Define a useCallback hook for the removeTrack function, which calls the onRemove callback function passed in as a prop with the current track object as an argument
    const removeTrack = useCallback(
        (event) => {
            onRemove(track);
        },
        [onRemove, track]
    );

    // Define a renderAction function, which returns a button element with the appropriate sign (+ or -) and callback function based on the props.sign prop
    const renderAction = () => {
        if (sign === "-") {
            return (
                <input type="button" className={styles.AddSongButton} data-testid="add-btn" value={sign} onClick={removeTrack} />
            );
        }
        else {
            return (
                <input type="button" className={styles.AddSongButton} data-testid="remove-btn" value={sign} onClick={addTrack} />
            );
        }
    };

    // Render a li element with the track name, artist name, album name, and the renderAction() button
    return (
        <li className={styles.TrackElement}>
            <div className={styles.TrackInfo}>
                <div id="inner" className={styles.Inner}>
                    <div className={styles.Div1}>
                        <p className={styles.SongNameText}>{track.name}</p>
                    </div>
                    <div className={styles.Div2}>
                        <p className={styles.SongArtistText}>{track.artists ? track.artists.map(artist => artist.name).join(', ') : ''} | {track.album ? track.album.name : ''}</p>
                    </div>
                </div>
                <div className={styles.Div3}>
                    {renderAction()}
                </div>
            </div>
        </li>
    );
};

export default Track;