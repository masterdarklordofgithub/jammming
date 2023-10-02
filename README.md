# Jammming

Jammming is a web application that allows users to search the Spotify library, create custom playlists, and save them to their Spotify accounts.

## Table of Contents

- [**Installation**]()
- [**Usage**]()
- [**Components**]()
- [**Contributing**]()
- [**License**]()
## Installation

To install Jammming, follow these steps:

1. Clone the repository to your local machine using git clone [https://github.com/masterdarklordofgithub/jammming.git]()
2. Install the required dependencies using *npm install*
3. Create a new Spotify application on the [Spotify Developer Dashboard]()
4. Add *http://localhost:3000* as a Redirect URI in your Spotify application settings
5. Create a *.env* file in the root directory of the project and add your Spotify application Client ID and Redirect URI as environment variables:

`REACT_APP_SPOTIFY_CLIENT_ID=your_client_id_here
REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000`

## Usage

To use Jammming, follow these steps:

1. Start the development server using **npm start**
2. Open your web browser and navigate to **http://localhost:3000**
3. Search for songs, artists, or albums using the search bar
4. Log in to your Spotify account at the authentication request.
5. Click the "+" button next to a song to add it to your playlist
6. Click the "Save to Spotify" button to save your playlist to your Spotify account

## Components

The project is built using the following React components:

#### **App**

The top-level component that renders the entire application.

**State**

- **searchResults**: An array of objects representing the search results from the Spotify API.
- **playlistName**: A string representing the name of the user's custom playlist.
- **playlistTracks**: An array of objects representing the tracks in the user's custom playlist.

**Example Usage**

``<App/>``

#### **SearchBar**

A component that allows users to search the Spotify library.

**Props**

- **onSearch**: A callback function that is called when the user submits a search query.

**Example Usage**

``<SearchBar onSearch={searchSpotify}/>``

#### **SearchResults**

A component that displays the search results from the Spotify API.

**Props**

- **searchResults**: An array of objects representing the search results from the Spotify API.
- **onAdd**: A callback function that is called when the user clicks the "+" button next to a search result.

**Example Usage**

``<SearchResults searchResults={searchResults} onAdd={addTrack}/>``

#### **Playlist**

A component that displays the user's custom playlist.

**Props**

- **playlistName**: A string representing the name of the user's custom playlist.
- **playlistTracks**: An array of objects representing the tracks in the user's custom playlist.
- **onRemove**: A callback function that is called when the user clicks the "-" button next to a track.

**Example Usage**

``<Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} />``

#### **TrackList**

A component that renders a list of **Track** components.

**Props**
- tracks: An array of objects representing the tracks to be rendered.
- onAdd: A callback function that is called when the user clicks the "+" button next to a track.
- onRemove: A callback function that is called when the user clicks the "-" button next to a track.
- isRemoval: A boolean value indicating whether the component should render the "+" or "-" button.

``<TrackList tracks={tracks} onAdd={addTrack} onRemove={removeTrack} isRemoval={true} />``

#### **Track**

A component that displays information about a track.

**Props**

- **track**: An object representing the track to be displayed.
- **onAdd**: A callback function that is called when the user clicks the "+" button next to the track.
- **onRemove**: A callback function that is called when the user clicks the "-" button next to the track.
- **isRemoval**: A boolean value indicating whether the component should render the "+" or "-" button.

``<Track track={track} onAdd={addTrack} onRemove={removeTrack} isRemoval={true} />``

### Contributing

If you would like to contribute to Jammming, follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them to your branch
4. Push your changes to your forked repository
5. Submit a pull request to the main repository

### License

Jammming is licensed under the [MIT License](https://opensource.org/license/mit/).