/*Will contain a SearchBar and a SearchButton*/
import { useState } from "react";
import styles from './SearchBar.module.css';

function SearchBar() {
    const [searchText, setSearchText] = useState('');

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    }
    const handleSubmit = (event) => {

    }
    return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <input
                type="text"
                aria-label="Search for a song"
                placeholder="Search for a song"
                className={styles.SearchField}
                value={searchText}
                onChange={handleTextChange}
            />
            <input type="submit" value="Search" className={styles.SearchButton} />
        </form>
    );
}

export default SearchBar;