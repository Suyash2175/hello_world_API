const express = require('express');
const cors = require('cors'); // Import CORS middleware
const { loadMessages, saveMessages } = require('./utils/loadMessages');
const path = require('path'); // Include path module to work with file paths

const app = express();
const port = 5000;

// Load messages once at startup
let messages = loadMessages();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get a Hello World message in a specified language
app.get('/hello', (req, res) => {
  const language = req.query.language;
  if (!language) {
    return res.status(400).json({ error: "Language query parameter is required" });
  }

  const message = messages[language];
  if (message) {
    res.json({ message });
  } else {
    res.status(404).json({ error: "Message not found for the specified language" });
  }
});

// Endpoint to add a new language message
app.post('/hello', (req, res) => {
  const { language, message } = req.body;
  if (!language || !message) {
    return res.status(400).json({ error: "Language and message fields are required" });
  }

  messages[language] = message;
  saveMessages(messages);
  res.status(201).json({ success: `Message added for language: ${language}` });
});

// Endpoint to update an existing language message
app.put('/hello', (req, res) => {
  const { language, message } = req.body;
  if (!language || !message) {
    return res.status(400).json({ error: "Language and message fields are required" });
  }

  if (messages[language]) {
    messages[language] = message;
    saveMessages(messages);
    res.json({ success: `Message updated for language: ${language}` });
  } else {
    res.status(404).json({ error: "Language not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Hello World API running at http://localhost:${port}`);
});
