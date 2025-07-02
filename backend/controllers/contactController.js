const ghl = require('../services/gohighlevelService');
const path = require('path');

exports.handleEmail = async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  try {
    await ghl.createOrIgnoreContact(email);
    const filePath = path.join(__dirname, '../files/ton-document.pdf');
    res.download(filePath);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Erreur côté serveur' });
  }
};
