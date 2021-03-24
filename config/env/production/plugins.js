module.exports = ({env}) => ({
  upload: {
    provider: "sftp-v2",
    providerOptions: {
      host: "cdn.kryptokurzy.cz",
      port: "22",
      user: "cdn",
      password: process.env.SFTP_PASSWORD,
      basePath: "/cdn",
      baseUrl: "/"
    }
  },
});
