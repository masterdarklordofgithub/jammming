import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
    it('renders a search input field', () => {
        render(<SearchBar />);
        const searchInput = screen.getByPlaceholderText('Search for a song');
        expect(searchInput).toBeInTheDocument();
    });

    it('calls the onSearchTracks prop when the search form is submitted', () => {
        const handleSearchTracks = jest.fn();
        render(<SearchBar onSearchTracks={handleSearchTracks} />);
        const searchForm = screen.getByTestId('form', { name: 'SearchForm' });
        fireEvent.submit(searchForm);
        expect(handleSearchTracks).toHaveBeenCalled();
    });

    it('calls the setSongName prop when the search input field value is changed', () => {
        const handleSetSongName = jest.fn();
        render(<SearchBar setSongName={handleSetSongName} />);
        const searchInput = screen.getByPlaceholderText('Search for a song');
        const newSongName = 'New Song Name';
        fireEvent.change(searchInput, { target: { value: newSongName } });
        expect(handleSetSongName).toHaveBeenCalledWith(newSongName);
    });
});