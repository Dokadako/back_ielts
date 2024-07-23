const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable

const API_KEY = 'ODVlNjJhMzNhYjRiNGVlNzg0MGNiZmQyZDdlMzAzZjEtMTcyMDQ3OTI1OQ==';
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

app.post('/get-access-token', async (req, res) => {
    try {
        // Ask the server for a secure Access Token
        const response = await axios.post('https://api.heygen.com/v1/streaming.create_token', {}, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        console.log(response);
        res.json({ token: response.data.data.token }); // Return the token in the expected structure
    } catch (error) {
        console.error('Error retrieving access token:', error);
        res.status(500).json({ error: 'Failed to retrieve access token' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
