import  chai, {expect} from 'chai';
import { getAlbum } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {API_URL} from '../src/config';
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Test Albums api', () => {
    let stubedFetch;
    let promise;
    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });

    });
    afterEach(() => {
        stubedFetch.restore();
    });

    describe('Smoke Tests', () => {
        it('shold have a method', () => {
            expect(getAlbum).to.be.exist;
        });
    });
    describe('Album', () => {
        it('Shold a call fetch', () => {
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('Shold receive correct url to fetch', () => {
           const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
           expect(stubedFetch).to.have.been.calledOnceWith(`${API_URL}/album?id=4aawyAB9vmqN3uQ7FjRGTy`);
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name'});
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            album.then((data) => {
                console.log(data);
                expect(data).to.be.eql({ album: 'name'});
              })
          });
    });
});