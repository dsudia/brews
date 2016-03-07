module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/brews'
  },
  production: {
    client: 'pg',
    connection: 'postgres://pbiligtqtlpymi:JpI8coC_orMzDdsISdPkp4fS-s@ec2-54-204-7-145.compute-1.amazonaws.com:5432/dfobce8vp6ctq0?ssl=true',
    pool: {
      min: 0
    }
  }
};
