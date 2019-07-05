require('dotenv')
  .config();

export let env_vars = {
  'Config.Api_host': process.env.API_HOST,
}