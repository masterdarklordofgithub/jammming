import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
    it('renders a list of tracks', () => {
        const songs = [
            { id: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
            { id: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
            { id: '3', name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
        ];
        render(<SearchResults songs={songs} />);
        const trackElements = screen.getAllByRole('listitem');
        expect(trackElements.length).toBe(songs.length);
    });
});