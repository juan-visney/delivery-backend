const db = require( '../config/database' )

const client = {}

client.get = async () => {
    return await db.query( 'select * from usuario where rol = "cliente" and estado = "activo"' )
}

client.create = async ( client ) => {
    return await db.query( 'insert into usuario set ?', [ client ] )
}

client.find = async ( id ) => {
    return await db.query( 'select * from usuario where rol = "cliente" and idUser = ?', [ id ] )
}

client.update = async ( id, client ) => {
    return await db.query( 'update usuario set ? where idUser = ?', [ client, id ] )
}

client.delete = async ( id ) => {
    return await db.query( 'update usuario set estado = "inactivo" where idUser = ?', [ id ] )
}

module.exports = client