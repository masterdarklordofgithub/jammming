/*Will be used in Tracklist aswell as SearchResults*/
/* This is a .... module*/
import React from 'react';
import './Styles.css';
import styles from './Track.module.css';

function Track(props) {
    /*const { trackName, trackId } = props;*/
    const { name, artist, album, id, sign } = props;


    return (
        <li className={styles.TrackElement}>
            <div id="div-container" className={styles.TrackInfo}>
                <div id="inner">
                    <div class="div1">
                        <p className={styles.SongNameText}>{name}</p>
                    </div>
                    <div class="div2">
                        <p className={styles.SongArtistText}>{artist} | {album}</p>
                    </div>
                </div>
                <div class="div3">
                    <input type="button" className={styles.AddSongButton} value={sign} />
                </div>
            </div>
        </li>
    );
}

export default Track;