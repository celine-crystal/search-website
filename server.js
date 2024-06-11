const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3002;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to download favicon
app.post('/api/download-favicon', async (req, res) => {
    const { url } = req.body;
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`;
    const faviconPath = path.join(__dirname, 'assets', 'favicons', `${new URL(url).hostname}.ico`);

    try {
        const response = await axios.get(faviconUrl, { responseType: 'stream' });
        response.data.pipe(fs.createWriteStream(faviconPath))
            .on('finish', () => {
                res.json({ faviconPath: `/assets/favicons/${new URL(url).hostname}.ico` });
            })
            .on('error', (error) => {
                console.error('Error downloading favicon:', error);
                res.status(500).json({ error: 'Error downloading favicon' });
            });
    } catch (error) {
        console.error('Error fetching favicon:', error);
        res.status(500).json({ error: 'Error fetching favicon' });
    }
});

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});