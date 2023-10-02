import { render, screen } from '@testing-library/react';
import React from 'react';
import Track from './Track';

describe('Track', () => {
    it('renders the track name, artist name, and album name', () => {
        const track = {
            id: 1,
            name: 'Track 1',
            artists: [{ name: 'Artist 1' }, { name: 'Artist 2' }],
            album: { name: 'Album 1' },
        };
        render(<Track track={track} />);
        const nameElement = screen.getByText(track.name);
        const artistElement = screen.getByText(`${track.artists[0].name}, ${track.artists[1].name} | ${track.album.name}`);
        expect(nameElement).toBeInTheDocument();
        expect(artistElement).toBeInTheDocument();
    });

    it('calls the onAdd prop when the add button is clicked', () => {
        const onAdd = jest.fn();
        const track = { id: 1, name: 'Track 1' };
        render(<Track track={track} onAdd={onAdd} sign='+' />);
        const addButton = screen.getByRole('button', { name: '+' });
        addButton.click();
        expect(onAdd).toHaveBeenCalledWith(track);
    });

    it('calls the onRemove prop when the remove button is clicked', () => {
        const onRemove = jest.fn();
        const track = { id: 1, name: 'Track 1' };
        render(<Track track={track} onRemove={onRemove} sign='-' />);
        const removeButton = screen.getByRole('button', { name: '-' });
        removeButton.click();
        expect(onRemove).toHaveBeenCalledWith(track);
    });
});