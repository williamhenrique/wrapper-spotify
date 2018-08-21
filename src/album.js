import {API_URL} from './config';
import {toJSON} from './utils';

const HEADER = {
    headers : {
        Authorization : "Bearer BQB7NJ0eZ7svMBhKkgejQXMJ6YFHCuqh3To426DSgBRByKa7uo9jaq_GFgjcwqGxWrVvlA0xYv903pCuSrIISy-gAXg-GiL_ir3oAmGvqzJB2xIWLMFXRiFYGY34J34e0KNdygTpz-q4Nw4X"
    }
}

export const getAlbum = (id) =>fetch(`${API_URL}/album?id=${id}`, HEADER).then(toJSON);

export const getAlbums = ids => fetch(`${API_URL}/albums/?ids=${ids}`, HEADER).then(toJSON);

export const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`, HEADER).then(toJSON);