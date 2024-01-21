const axios = require('axios');


class Auth0Utils {

    #AUTH0_API_URL = process.env.AUTH0_API_MANAGEMENT_URL;
    #authToken = null;

    constructor(opts) { }

    async init() {
        const response = await axios.post(process.env.AUTH0_TOKEN_API_URL, {
            grant_type: 'client_credentials',
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            audience: process.env.AUTH0_AUDIENCE,
        });

        this.#authToken = response?.data?.access_token;
    }

    async signup(opts) {
        const { username = 'NA', email, password } = opts;

        return await axios.post(
            this.#AUTH0_API_URL,
            {
                connection: 'Username-Password-Authentication', // Connection type, adjust as needed
                email, // Replace with the user's email
                password, // Replace with the user's password
                username
            },
            {
                headers: {
                    Authorization: `Bearer ${this.#authToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}

module.exports = Auth0Utils;