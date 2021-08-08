import supertest from 'supertest';


class CountriesHelper {
    constructor() {
        this.response = null;
    }

    async get() {
        await supertest(process.env.Base_URL)
            .get('/country_codes')
            .then((res) => {this.response = res})
        return this.response;
    }
}

export default CountriesHelper;