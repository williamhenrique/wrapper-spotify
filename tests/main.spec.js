import  chai, {expect} from 'chai';
import {search, searchArtists, searchAlbums, searchPlaylists, searchTracks} from '../src/main';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {

    let fetchedStub;
    let promise;
    beforeEach( () =>{
        fetchedStub = sinon.stub(global, 'fetch');
        promise = fetchedStub.resolves({ json: () => {} });
        
    });

    afterEach( () =>{
        fetchedStub.restore();
    });

    describe('Smoke tests', () => {
        it('Shold a method search', () => {
            expect(search).to.exist;
        });

        it('Shold a method search', () => {
            expect(search).to.exist;
        });

        it('Shold a method searchArtists', () => {
            expect(searchArtists).to.exist;
        });

        it('Shold a method searchAlbums', () => {
            expect(searchAlbums).to.exist;
        });

        it('Shold a method searchPlaylists', () => {
            expect(searchPlaylists).to.exist;
        });

        it('Shold a method searchTracks', () => {
            expect(searchTracks).to.exist;
        });

    });
     
    describe('Generic Test', () => {
        
       

        it('Shold call fetch function', () => {
            const artists = search(); 
            expect(fetchedStub).to.have.been.calledOnce;

        });

        it('Shold receive correct url to fetch', () => {
            context('passing one type', () => {
                const artists = search('matanza', 'artists'); 
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=matanza&type=artists');

                const albums = search('matanza', 'albums');
                
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=matanza&type=albums');
            });
            context('passing more than one type', () => {
                const artistsAndAlbums = search('matanza', ['artist', 'albums']); 
                expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=matanza&type=artist,albums');
            });
        });
        // it('Shold return the JSON data from promise', () => {
        //     fetchedStub.resolves({ json: () => { body: 'json' } });
        //     const artists = search('matanza', 'artist');
        //     expect(artists.resolveValue).to.be.eql({ body: 'json' });
        // })

    });

    describe('SearchArtist', () =>{
        it('Shoud call fetch function', () =>{
            const artists = searchArtists('matanza');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Shoud call fetch with correct url', () =>{
            const artists = searchArtists('matanza');
            expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=matanza&type=artist');
        });
    });

    describe('SearchAlbums', () =>{
        it('Shoud call fetch function', () =>{
            const albums = searchAlbums('matanza');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Shoud call fetch with correct url', () =>{
            const albums = searchAlbums('matanza');
            expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=matanza&type=album');
        });
    });

    describe('SearchATracks', () =>{
        it('Shoud call fetch function', () =>{
            const tracks = searchTracks('matanza');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Shoud call fetch with correct url', () =>{
            const tracks = searchTracks('matanza');
            expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=matanza&type=track');
        });
    });

    describe('SearchAPlaylist', () =>{
        it('Shoud call fetch function', () =>{
            const playlist = searchPlaylists('matanza');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Shoud call fetch with correct url', () =>{
            const playlist = searchPlaylists('matanza');
            expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=matanza&type=playlist');
        });
    });

});