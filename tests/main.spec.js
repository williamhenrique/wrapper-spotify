import  chai, {expect} from 'chai';
import {search, searchArtists, searchAlbums, searchPlaylists, searchTracks} from '../src/main';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

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
        it('Shold call fetch function', () => {
            const fetchedStub = sinon.stub(global, 'fetch');
            const artists = search(); 
            expect(fetchedStub).to.have.been.calledOnce;

            fetchedStub.restore();
        });

        it('Shold receive correct url to fetch', () => {
            const fetchedStub = sinon.stub(global, 'fetch');
            const artists = search('matanza', 'artists'); 
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=matanza&type=artists');

            const albums = search('matanza', 'albums'); 
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=matanza&type=albums');
        });
    });
});