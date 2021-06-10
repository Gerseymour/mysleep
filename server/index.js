const express = require('express');
const cors = require('cors')();
require('dotenv').config()

const app = express();
const PORT = 3006;
const client_id = process.env.GOOGLE_CLIENT_ID; //Gets the ID for Google OAuth
const client_secret = process.env.GOOGLE_SECRET; //Gets the secret for Google OAuth

app.use(cors);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); 
});