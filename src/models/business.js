const db = require( '../config/database' )

const business = {}

business.get = async () => {
    return await db.query( 'select * from usuario where rol = "empresa" and estado = "activo"' )
}

business.create = async ( business ) => {
    return await db.query( 'insert into usuario set ?', [ business ] )
}

business.find = async ( id ) => {
    return await db.query( 'select * from usuario where rol = "empresa" and idUser = ?', [ id ] )
}

business.update = async ( id, business ) => {
    return await db.query( 'update usuario set ? where idUser = ?', [ business, id ] )
}

business.delete = async ( id ) => {
    return await db.query( 'update usuario set estado = "inactivo" where idUser = ?', [ id ] )
}

module.exports = business