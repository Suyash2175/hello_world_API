const fs = require('fs');
const path = require('path');

// Path to the messages.json file
const messagesFilePath = path.join(__dirname, '../messages.json');

// Function to load messages from messages.json
function loadMessages() {
  try {
    const data = fs.readFileSync(messagesFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading messages:", error);
    return {};
  }
}

// Function to save messages to messages.json
function saveMessages(messages) {
  try {
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), 'utf8');
    console.log("Messages saved successfully.");
  } catch (error) {
    console.error("Error saving messages:", error);
  }
}

module.exports = { loadMessages, saveMessages };
