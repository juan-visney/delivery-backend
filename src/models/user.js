const db = require( '../config/database' )

const user = {}

user.find = async ( user, pass ) => {
    return await db.query( 'select * from usuario where user = ? and pass = ?', [ user, pass ] )
}

user.create = async ( user ) => {
    return await db.query( 'insert into usuario set ?', [ user ] )
}

module.exports = user