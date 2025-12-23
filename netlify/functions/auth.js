const { NetlifyOAuth } = require('netlify-oauth-provider');

exports.handler = NetlifyOAuth({
  provider: 'github',
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});
