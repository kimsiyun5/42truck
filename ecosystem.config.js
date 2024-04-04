module.exports = {
  apps: [{
    name: '42truck',
    script: 'dist/init.js',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};
