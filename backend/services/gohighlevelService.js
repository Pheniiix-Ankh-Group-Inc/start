const axios = require('axios');
const { getToken } = require('../utils/oauthClient');

exports.createOrIgnoreContact = async (email) => {
  const accessToken = getToken();
  if (!accessToken) throw new Error('Token GHL manquant');

  // Chercher le contact
  const check = await axios.get(`${process.env.GHL_API_BASE}/contacts?email=${email}`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  if (check.data.contacts && check.data.contacts.length > 0) {
    console.log('📎 Contact déjà existant');
    return;
  }

  // Créer un nouveau contact
  await axios.post(`${process.env.GHL_API_BASE}/contacts/`, {
    email,
    name: 'Visiteur landing',
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });

  console.log('✅ Nouveau contact créé');
};
