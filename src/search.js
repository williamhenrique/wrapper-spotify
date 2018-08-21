import {API_URL} from './config';
import {toJSON} from './utils';
const HEADER = {
    headers : {
        Authorization : "Bearer BQB7NJ0eZ7svMBhKkgejQXMJ6YFHCuqh3To426DSgBRByKa7uo9jaq_GFgjcwqGxWrVvlA0xYv903pCuSrIISy-gAXg-GiL_ir3oAmGvqzJB2xIWLMFXRiFYGY34J34e0KNdygTpz-q4Nw4X"
    }
}

export const search = (query, type) => {
    return fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADER).then(toJSON);
}

export const searchArtists = (query) => search(query, ['artist']);
export const searchAlbums = (query) => search(query, ['album'])
export const searchTracks = (query) => search(query, ['track'])
export const searchPlaylists = (query) => search(query, ['playlist'])