import { shallow } from 'enzyme';
import React from 'react';
import TrackList from '../TrackList/TrackList';
import Playlist from './Playlist';

jest.mock('../TrackList/TrackList', () => {
    return function DummyTrackList(props) {
        return (
            <div>
                <span>TrackList component</span>
                <span>{JSON.stringify(props)}</span>
            </div>
        );
    };
});

jest.mock('../Track/Track', () => {
    return function DummyTrack(props) {
        return (
            <div>
                <span>Track component</span>
                <span>{JSON.stringify(props)}</span>
            </div>
        );
    };
});

describe('Playlist', () => {
    const props = {
        playlistName: 'My Playlist',
        playlistTracks: [
            { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
            { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
        ],
        onNameChange: jest.fn(),
        onRemove: jest.fn(),
        onSave: jest.fn(),
    };

    it('renders a TrackList component with the correct props', () => {
        const wrapper = shallow(<Playlist {...props} />);
        const trackList = wrapper.find(TrackList);
        expect(trackList).toHaveLength(1);
        expect(trackList.props()).toEqual({
            tracks: props.playlistTracks,
            onRemove: props.onRemove,
            sign: '-',
        });
    });

    it('renders an input element with the correct props', () => {
        const wrapper = shallow(<Playlist {...props} />);
        const input = wrapper.find('input');
        expect(input).toHaveLength(1);
        expect(input.props()).toEqual({
            type: 'text',
            value: props.playlistName,
            onChange: props.onNameChange,
        });
    });
});