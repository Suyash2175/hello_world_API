# Hello World API

## Overview
The Hello World API is a simple REST API that returns "Hello World" messages in various languages. It includes a web interface where users can select a language to view the greeting message.

## Deployment
The API is live on Vercel: (https://hello-world-api-ten.vercel.app).

## Project Files

- **app.js**: Server file that defines API routes and handles requests.
- **index.html**: Web interface for selecting a language and viewing the greeting.
- **loadMessages.js**: JavaScript file to load and display messages on the webpage.
- **Messages.json**: JSON file with "Hello World" messages in different languages.
- **styles.css**: Stylesheet for styling the web interface.

## Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Suyash2175/hello-world-api.git
Navigate to the project directory:

bash
Copy code
cd hello-world-api
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
node app.js
Open the web interface: Visit http://localhost:5000 in your browser to use the API locally.

API Usage
To get a "Hello World" message in a specific language, make a GET request using this format:

http
Copy code
GET https://hello-world-api-ten.vercel.app/?language=en
Replace en with the desired language code (refer to Messages.json for supported codes).

