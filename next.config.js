// ============================ Enviroment Variables ============================
const ENV = process.env.ENV || 'local';
const dotEnvResult = require('dotenv').config({ path: `./bin/${ENV}.env` })

if (dotEnvResult.error) {
    console.error(dotEnvResult.error);
    process.exit(1)
}

// ============================ Export ============================
module.exports = {
    publicRuntimeConfig: Object.assign(dotEnvResult.parsed || {}, { ENV })
}