import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Playlist from './Playlist';

describe('Playlist', () => {
    it('renders the playlist title input field', () => {
        const onNameChange = jest.fn();
        render(<Playlist onNameChange={onNameChange} />);
        const inputElement = screen.getByPlaceholderText('Enter playlist title');
        expect(inputElement).toBeInTheDocument();
    });
    it('renders the track list', () => {
        const playlistTracks = [{ id: 1, name: 'Track 1' }, { id: 2, name: 'Track 2' }];
        const onRemove = jest.fn();
        render(<Playlist playlistTracks={playlistTracks} onRemove={onRemove} />);
        const trackListElement = screen.getByRole('list');
        expect(trackListElement).toBeInTheDocument();
    });
    it('calls the onNameChange prop when the playlist title input field is changed', () => {
        const handleNameChange = jest.fn();
        render(<Playlist onNameChange={handleNameChange} />);
        const inputElement = screen.getByPlaceholderText('Enter playlist title');
        const newTitle = 'New Playlist Title';
        fireEvent.change(inputElement, { target: { value: newTitle } });
        expect(handleNameChange).toHaveBeenCalledWith(newTitle);
    });
    it('calls the onSave prop when the add playlist button is clicked', () => {
        const onSave = jest.fn();
        render(<Playlist onSave={onSave} />);
        const addButton = screen.getByRole('button', { name: 'Add Playlist' });
        addButton.click();
        expect(onSave).toHaveBeenCalled();
    });
});