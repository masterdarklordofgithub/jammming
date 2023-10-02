import { render, screen } from '@testing-library/react';
import React from 'react';
import Tracklist from './Tracklist';

describe('Tracklist', () => {
    it('renders a list of tracks', () => {
        const tracks = [
            { id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
            { id: '2', name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
            { id: '3', name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
        ];
        render(<Tracklist tracks={tracks} />);
        const trackElements = screen.getAllByRole('listitem');
        expect(trackElements.length).toBe(tracks.length);
    });
});