module.exports = {
    apps : [{
      name      : 'hotels',
      script    : './index.js',
      env: {
        NODE_ENV: 'development',
        CONFIGURATIONS_PATH:'dev',
        SERVER_PORT: 2000,
        THIRD_PARTY_HOST:"api.myjson.com"
      },
      env_staging: {
        NODE_ENV: 'staging',
        CONFIGURATIONS_PATH:'stg',
        SERVER_PORT: 2000,
        THIRD_PARTY_HOST:"api.myjson.com"
      },
      env_prod : {
        NODE_ENV: 'production',
        CONFIGURATIONS_PATH:'prod',
        SERVER_PORT: 2000,
        THIRD_PARTY_HOST:"api.myjson.com"
      }
    }]
  };