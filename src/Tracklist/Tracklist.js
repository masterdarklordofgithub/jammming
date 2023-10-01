import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

//The TrackList component receives a tracks prop, which is an array of track objects.
function TrackList(props) {

    const tracks = props.tracks;
    let listofTracks;

    //It maps over the tracks array and renders a Track component for each track.
    //Track component receives props including track object, sign to display after track name, callback functions for adding and removing tracks.
    if (tracks) {
        listofTracks = tracks.map((track, i) => (
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
    }

    //Rendering a ul element with the list of Track components.
    return (
        <div className="trackList">
            <ul className={styles.TrackUl}>
                {listofTracks}
            </ul>

        </div>
    );
}

export default TrackList;