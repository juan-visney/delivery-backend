const db = require( '../config/database' )

const business = {}

business.get = async () => {
    const rol = "empresa"
    const estado = "activo"
    return await db.query( 'select * from usuario where rol = ? and estado = ?', [rol, estado] )
}

business.create = async ( business ) => {
    return await db.query( 'insert into usuario set ?', [ business ] )
}

business.find = async ( id ) => {
    const rol = "empresa"
    return await db.query( 'select * from usuario where rol = ? and idUser = ?', [ rol, id ] )
}

business.update = async ( id, business ) => {
    return await db.query( 'update usuario set ? where idUser = ?', [ business, id ] )
}

business.delete = async ( id ) => {
    const estado = "inactivo"
    return await db.query( 'update usuario set estado = ? where idUser = ?', [ estado, id ] )
}

module.exports = business