module.exports = ({ env }) => ({
  host: env('HOST', 'https://api.kryptokurzy.cz')
});
