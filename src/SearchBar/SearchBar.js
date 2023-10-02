import React from "react";
import styles from './SearchBar.module.css';

function SearchBar(props) {

    // Define a callback function to handle changes to the search input
    const handleTextChange = (event) => {
        props.setSongName(event.target.value);
    }

    return (
        <form name="SearchForm" id="SearchForm" action="#" className={styles.SearchBar} onSubmit={props.onSearchTracks}>
            <input
                name="SearchInput"
                id="SearchInput"
                data-testid="form"
                type="text"
                aria-label="Search for a song"
                placeholder="Search for a song"
                className={styles.SearchField}
                onChange={handleTextChange}
            />
            <input type="submit" value="Search" className={styles.SearchButton} />
        </form>
    );
}

export default SearchBar;