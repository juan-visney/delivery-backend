const db = require( '../config/database' )

const product = {}

product.get = async () => {
    const estado = 'activo'
    return await db.query( 'select * from producto where estado = ?', [estado] )
}

product.create = async ( _product ) => {
    return await db.query( 'insert into producto set ?', [ _product ] )
}

product.getByBusiness = async ( id ) => {
    const estado = 'activo'
    return await db.query( 'select * from producto where estado = ? and idBusiness = ?', [ estado, id ] )
}

product.find = async ( id ) => {
    return await db.query( 'select * from producto where idProduct = ?', [ id ] )
}

product.update = async ( _product, id ) => {
    return await db.query( 'update producto set ? where idProduct = ?', [ _product, id ] )
}

product.delete = async ( id ) => {
    return await db.query( 'update producto set estado = "inactivo" where idProduct = ?', [ id ] )
}

module.exports = product