import {expect} from 'chai';
import CountriesHelper from '../helpers/countries.helper';

describe('Country codes', function () {
    const countriesHelper = new CountriesHelper();
    // const item = items[MAth.floor(Math.random() * items.length)];

    before(async function () {
        await countriesHelper.get();
    });

    it('Response status code is 200', async function () {
        expect(countriesHelper.response.statusCode).to.eq(200);

    });

    it('Response has an array with at least one item', async function () {
        expect(countriesHelper.response.body.length).to.be.at.least(1);
    });

    it('Response contains string array', async function () {
        for (let countryCode of countriesHelper.response.body) {
            expect(countryCode).to.be.a('string');
        }
    });
});
