const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.194.54.134',
        user: 'heroic-bliss-319800:us-central1:my-app-311-sd',
        password: 'porkchop',
        database: 'MyApp311'
      })
      return this.pool
    }
    return this.pool
  }
}

const instance = new Connection();

module.exports = instance;