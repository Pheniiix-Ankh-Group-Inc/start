const axios = require('axios');
require('dotenv').config();

let token = null;

exports.getAuthUrl = () => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URI,
    scope: process.env.SCOPES
  });

  return `${process.env.AUTH_URL}?${params.toString()}`;
};

exports.exchangeCodeForToken = async (code) => {
  const res = await axios.post(process.env.TOKEN_URL, {
    grant_type: 'authorization_code',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
    redirect_uri: process.env.REDIRECT_URI,
  }, {
    headers: { 'Content-Type': 'application/json' }
  });

  return res.data;
};

exports.storeToken = (tokenData) => {
  token = tokenData.access_token;
};

exports.getToken = () => token;
