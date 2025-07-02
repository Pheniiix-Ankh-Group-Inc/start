const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const oauthClient = require('./utils/oauthClient');

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Authentification OAuth 2.0
app.get('/oauth/login', (req, res) => {
  const url = oauthClient.getAuthUrl();
  res.redirect(url);
});

app.get('/oauth/callback', async (req, res) => {
  try {
    const tokenData = await oauthClient.exchangeCodeForToken(req.query.code);
    oauthClient.storeToken(tokenData); // temporaire en mémoire
    res.send('✅ Authentifié avec succès dans GHL');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de l\'authentification');
  }
});

app.use('/api', contactRoutes);

app.listen(3000, () => {
  console.log('✅ Backend lancé sur http://localhost:3000');
});
