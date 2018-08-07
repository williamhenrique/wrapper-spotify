import  chai, {expect} from 'chai';
import {search, searchArtists, searchAlbums, searchPlaylists, searchTracks} from '../src/main';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
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
        
        let fetchedStub;
        let promise;
        beforeEach( () =>{
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.resolves({ json: () => {} });
        });
    
        afterEach( () =>{
            fetchedStub.restore();
        });

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
    });
});