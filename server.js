const { createServer } = require('@lhci/server')
const { NODE_ENV, DATABASE_URL, PORT } = process.env

if (NODE_ENV !== 'production') {
  require('dotenv').config()
}

console.log('Starting server...')

createServer({
  port: PORT,
  storage: {
    storageMethod: 'sql',
    sqlDialect: 'postgres',
    sqlConnectionSsl: true,
    sqlConnectionUrl: DATABASE_URL,
    sqlDialectOptions: {
      ssl: true
    }
  }
})
  .then(({ port }) => console.log('Listening on port', port))
  .catch(error => {
    console.log('UH-OH!')
    throw error
  })
