const axios = require('axios');


class Auth0Utils {

    #AUTH0_API_URL = 'https://dev-p8o6d5cj.us.auth0.com/api/v2/users';
    #authToken = null;

    constructor(opts) { }

    async init() {
        const response = await axios.post(`https://dev-p8o6d5cj.us.auth0.com/oauth/token`, {
            grant_type: 'client_credentials',
            client_id: 'RH2Q8JqHuCqzZuSgxXVVQplYaQZIJdb5',
            client_secret: '0JYFhI1hAtKGgYpYvulhlDSS6jeseurHArs0cNlVqxksT_M5Iy84QmqUxZHbBt1Z',
            audience: 'https://dev-p8o6d5cj.us.auth0.com/api/v2/',
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