const { createServer } = require('@lhci/server')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

console.log('Starting server...')

createServer({
  port: process.env.PORT,
  storage: {
    storageMethod: 'sql',
    sqlDialect: 'postgres',
    sqlConnectionSsl: true,
    sqlConnectionUrl: process.env.DATABASE_URL,
  },
})
  .then(({port}) => console.log('Listening on port', port))
  .catch(error => {
    console.log('UH-OH')
    throw error
  })
