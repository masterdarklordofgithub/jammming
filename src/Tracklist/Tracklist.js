/*List of Track(s)*/
/* This is a .... module*/
import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function TrackList(props) {
    const { tracks } = props;

    const listofTracks = tracks.map((track, i) => (
        <Track
            name={track.name}
            artist={track.artist}
            album={track.album}
            id={track.id}
            sign={props.sign}
            key={'track_' + i}>{track}

        </Track>
    ));

    return (
        <div className="trackList">
            <ul className={styles.TrackUl}>
                {listofTracks}
            </ul>

        </div>
    );
}

export default TrackList;