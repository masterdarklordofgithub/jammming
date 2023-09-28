/*Will contain a SearchBar and a SearchButton*/
import React, { useCallback } from "react";
import styles from './SearchBar.module.css';

function SearchBar(props) {
    //const [searchText, setSearchText] = useState('');

    const handleTextChange = (event) => {
        //use setSongName props to set value of input for later usage in onClick search?
        props.setSongName(event.target.value);
    }
    const handleSubmit = useCallback(
        (event) => {
            props.onSearchTracks(event.target.value);
        },
        [props.onSearchTracks]
    );

    return (
        <form action="#" className={styles.SearchBar} onSubmit={props.onSearchTracks}>
            <input
                type="text"
                aria-label="Search for a song"
                placeholder="Search for a song"
                className={styles.SearchField}
                //value={searchText}
                onChange={handleTextChange}
            />
            <input type="submit" value="Search" className={styles.SearchButton} />
        </form>
    );
}

export default SearchBar;