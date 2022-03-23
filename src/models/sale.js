const db = require( '../config/database' )

const sale = {}

sale.get = async () => {
    const estado = "espera"
    return await db.query( 'select * from venta where estado = ?', [ estado ] )
}

sale.create = async ( sale ) => {
    return await db.query( 'insert into venta set ?', [ sale ] )
}

sale.find = async ( id ) => {
    return await db.query( 'select * from venta where idSale = ?', [ id ] )
}

sale.completed = async ( id, cost ) => {
    const estado = "completado"
    return await db.query( 'update venta set estado = ?, cost = ? where idSale = ?', [ estado, cost, id ] )
}

sale.delete = async ( id ) => {
    return await db.query( 'delete from venta where idSale = ?', [ id ] )
}

module.exports = sale