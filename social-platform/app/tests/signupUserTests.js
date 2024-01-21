const axios = require('axios');

(async () => {
    let authToken = null;
    // Auth0 Management API endpoint
    const AUTH0_API_URL = `https://dev-p8o6d5cj.us.auth0.com/api/v2/users`; // Management API

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

    console.log('User created:', response);
    console.log('User created:', response.data);
    // User created: {
    //     created_at: '2024-01-21T17:14:29.017Z',
    //     email: 'user@example.com',
    //     email_verified: false,
    //     identities: [
    //       {
    //         connection: 'Username-Password-Authentication',
    //         user_id: '65ad50f4ae3c459fa0750fbc',
    //         provider: 'auth0',
    //         isSocial: false
    //       }
    //     ],
    //     name: 'user@example.com',
    //     nickname: 'user',
    //     picture: 'https://s.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fus.png',
    //     updated_at: '2024-01-21T17:14:29.017Z',
    //     user_id: 'auth0|65ad50f4ae3c459fa0750fbc'
    //   }

})();