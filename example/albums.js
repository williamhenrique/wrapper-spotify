global.fetch = require('node-fetch');
 import { searchAlbums } from '../src/search';
 import { getAlbum } from '../src/album';
 
 const albums = searchAlbums('Matanza');
 albums.then(data => data.albums.items.map(item => console.log(item.name)));
 
 
//  const albums = searchAlbums('Matanza');
//  albums.then(data => data.albums.items.map(item => console.log(item.name)));

// const g_albums = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

// g_albums.then(data => {
//     console.log(data.status);
// })
// //console.log();