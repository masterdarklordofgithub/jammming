/*Will be used in Tracklist aswell as SearchResults*/
/* This is a .... module*/
import React, { useCallback } from 'react';
import './Styles.css';
import styles from './Track.module.css';

const Track = (props) => {
    //props' will change when *any* prop changes, so the preferred fix is to destructure the 'props' 
    //object outside of the useCallback call and refer to those specific props inside useCallback
    const onAdd = props.onAdd;
    const { track } = props.track;

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

    const renderAction = () => {
        if (props.sign === "-") {
            return (

                <input type="button" className={styles.AddSongButton} value={props.sign} onClick={removeTrack} />
            );
        }
        else {
            return (
                <input type="button" className={styles.AddSongButton} value={props.sign} onClick={addTrack} />
            );
        }

    };
    return (
        <li className={styles.TrackElement}>
            <div id="div-container" className={styles.TrackInfo}>
                <div id="inner">
                    <div class="div1">
                        <p className={styles.SongNameText}>{props.track.name}</p>
                    </div>
                    <div class="div2">
                        <p className={styles.SongArtistText}>{props.track.artist} | {props.track.album}</p>
                    </div>
                </div>
                <div class="div3">
                    {/*<input type="button" className={styles.AddSongButton} value={sign} onClick={handleChoice} />*/}
                    {renderAction()}
                </div>
            </div>
        </li>
    );
}

export default Track;