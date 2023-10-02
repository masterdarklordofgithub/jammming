import React, { useCallback } from 'react';
import styles from './Track.module.css';

//The Track component receives a track prop, which is an object representing a track on Spotify.
const Track = (props) => {
    const onAdd = props.onAdd;
    const { track } = props.track;

    //The Track component defines two callback functions, addTrack() and removeTrack(), which call the corresponding callback functions passed in as props.
    const addTrack = useCallback(
        (event) => {
            onAdd(props.track);
        },
        [onAdd, track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );

    //It also defines a renderAction() function, which returns a button element with the appropriate sign (+ or -) and callback function based on the props.sign prop.
    const renderAction = () => {
        if (props.sign === "-") {
            return (

                <input type="button" className={styles.AddSongButton} data-testid="add-btn" value={props.sign} onClick={removeTrack} />
            );
        }
        else {
            return (
                <input type="button" className={styles.AddSongButton} data-testid="remove-btn" value={props.sign} onClick={addTrack} />
            );
        }

    };
    //The Track component renders a li element with the track name, artist name, album name, and the renderAction() button.
    return (
        <li className={styles.TrackElement}>
            <div className={styles.TrackInfo}>
                <div id="inner" className={styles.Inner}>
                    <div className={styles.Div1}>
                        <p className={styles.SongNameText}>{props.track.name}</p>
                    </div>
                    <div className={styles.Div2}>
                        <p className={styles.SongArtistText}>{props.track.artists ? props.track.artists.map(artist => artist.name).join(', ') : ''} | {props.track.album ? props.track.album.name : ''}</p>
                    </div>
                </div>
                <div className={styles.Div3}>
                    {renderAction()}
                </div>
            </div>
        </li>
    );
}

export default Track;