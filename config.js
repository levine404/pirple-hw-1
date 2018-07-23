// SERVER CONFIG

const envs = {}

// STAGING ENV
envs.staging = {
  httpPort: 4000,
  httpsPort: 4040,
  envName: 'staging',
}

// PRODUCTION ENV
envs.production = {
  httpPort: 80,
  httpsPort: 443,
  envName: 'production'
}

// EXPORTS (DEFAULT TO STAGING ENV IF NODE_ENV IS NOT PROVIDED OR A VALID ENV)
module.exports = process.env.NODE_ENV && envs[process.env.NODE_ENV]
  ? envs[process.env.NODE_ENV]
  : envs.staging
