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
        let fetchedStub;
        let promisse;
        beforeEach(()=>{
            fetchedStub = sinon.stub(global, 'fetch');
            promisse = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();    
        });

        it('Shold call fetch function', () => {
            
            const artists = search(); 
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Shold receive correct url to fetch', () => {
            context('Passing one type', () => {
                const artists = search('matanza', 'artists'); 
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=matanza&type=artists');

                const albums = search('matanza', 'albums'); 
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=matanza&type=albums');

                   
            });
            context('Passing more type', () => {
              
                const albums = search('matanza', ['matanza', 'Santa Madre Cassino']); 
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=matanza&type=matanza,Santa Madre Cassino');
            });
        });

        it('should return the JSON Data from the Promise', () => {
            promise.resolves({ body: 'json' });
            const artists = search('Incubus', 'artist');
             expect(artists.resolveValue).to.be.eql({ body: 'json' });
          });
    
    });
});