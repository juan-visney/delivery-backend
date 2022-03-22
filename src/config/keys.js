const env = require( 'dotenv' )
env.config()

module.exports = {
    database: {
        host: process.env.DATABASE_HOST || 'db-mysql-do-user-11056291-0.b.db.ondigitalocean.com',
        user: process.env.DATABASE_USER || 'jvcode',
        password: process.env.DATABASE_PASSWORD || 'qNqDPnwJ0yzhrjUx',
        database: process.env.DATABASE_NAME || 'delivery',
        port: process.env.DATABASE_PORT || '25060'
    },
    port: process.env.PORT || 4000
}