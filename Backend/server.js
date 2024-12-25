const express = require('express');
const bodyParser = require('body-parser');
const { marked } = require('marked');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// API endpoint to convert Markdown to HTML
app.post('/convert', (req, res) => {
    const { markdown } = req.body;
    if (!markdown) {
        return res.status(400).json({ error: 'Markdown content is required' });
    }
    const html = marked(markdown);
    res.json({ html });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
