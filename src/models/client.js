const db = require( '../config/database' )

const client = {}

client.get = async () => {
    const rol = "cliente"
    const estado = "activo"
    return await db.query( 'select * from usuario where rol = ? and estado = ?', [ rol, estado ] )
}

client.create = async ( client ) => {
    return await db.query( 'insert into usuario set ?', [ client ] )
}

client.find = async ( id ) => {
    const rol = "cliente"
    return await db.query( 'select * from usuario where rol = ? and idUser = ?', [ rol, id ] )
}

client.update = async ( id, client ) => {
    return await db.query( 'update usuario set ? where idUser = ?', [ client, id ] )
}

client.delete = async ( id ) => {
    const estado = "inactivo"
    return await db.query( 'update usuario set estado = ? where idUser = ?', [ estado, id ] )
}

module.exports = client