const axios = require('axios');

(async () => {
    let authToken = null;
    // Auth0 Management API endpoint
    const AUTH0_API_URL = `https://dev-p8o6d5cj.us.auth0.com/api/v2/users`;

    const getAccessToken = async () => {
        const response = await axios.post(`https://dev-p8o6d5cj.us.auth0.com/oauth/token`, {
            grant_type: 'client_credentials',
            client_id: 'RH2Q8JqHuCqzZuSgxXVVQplYaQZIJdb5',
            client_secret: '0JYFhI1hAtKGgYpYvulhlDSS6jeseurHArs0cNlVqxksT_M5Iy84QmqUxZHbBt1Z',
            audience: 'https://dev-p8o6d5cj.us.auth0.com/api/v2/',
        });

        authToken = response.data.access_token;
    };

    await getAccessToken();
    // console.log(authToken);

    // Create a new user
    const response = await axios.post(
        AUTH0_API_URL,
        {
            connection: 'Username-Password-Authentication', // Connection type, adjust as needed
            email: 'user@example.com', // Replace with the user's email
            password: 'Tesykimkinder@123ft66', // Replace with the user's password
        },
        {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        }
    );

    console.log('User created:', response.data);
})();