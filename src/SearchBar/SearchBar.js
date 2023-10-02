import React from "react";
import styles from './SearchBar.module.css';

function SearchBar(props) {

    const handleTextChange = (event) => {
        //use setSongName props to set value of input for later usage in onClick search?
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