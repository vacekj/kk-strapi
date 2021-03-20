module.exports = ({ env }) => ({
  host: env('HEROKU_URL', '0.0.0.0')
});
