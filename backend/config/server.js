module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', '0.0.0.0'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '851a4b64db6c202bf571e57e34c96a83'),
    },
  },
});
