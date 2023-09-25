/*List of Track(s)*/
/* This is a .... module*/
import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function TrackList(props) {
    //const { tracks } = props;
    //const [{ tracks }, setTracks] = useState(props)
    const tracks = props.tracks;
    const listofTracks = tracks.map((track, i) => (
        <Track
            track={track}
            sign={props.sign}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onAddPlaylist={props.onAddPlaylist}
            onRemove={props.onRemove}
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