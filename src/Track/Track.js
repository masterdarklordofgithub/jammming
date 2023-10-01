import React, { useCallback } from 'react';
import './Styles.css';
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

                <input type="button" className={styles.AddSongButton} value={props.sign} onClick={removeTrack} />
            );
        }
        else {
            return (
                <input type="button" className={styles.AddSongButton} value={props.sign} onClick={addTrack} />
            );
        }

    };
    //The Track component renders a li element with the track name, artist name, album name, and the renderAction() button.
    return (
        <li className={styles.TrackElement}>
            <div id="div-container" className={styles.TrackInfo}>
                <div id="inner">
                    <div className="div1">
                        <p className="songNameText">{props.track.name}</p>
                    </div>
                    <div className="div2">
                        <p className="songArtistText">{props.track.artists.map(artist => artist.name).join(', ')} | {props.track.album.name}</p> {/*artists.join(', ') {props.track.album} */}
                    </div>
                </div>
                <div className="div3">
                    {renderAction()}
                </div>
            </div>
        </li>
    );
}

export default Track;