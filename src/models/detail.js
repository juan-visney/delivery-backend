const db = require( '../config/database' )

const detail = {}

detail.getSale = async ( id ) => {
    return await db.query( 'select idDetail, p.name as producto, u.name as business, u.photo, idSale, lot, price from detalle d, producto p, usuario u where idSale = ? and d.idProduct = p.idProduct and p.idBusiness = u.idUser', [ id ] )
}

detail.create = async ( detail ) => {
    return await db.query( 'insert into detalle set ?', [ detail ] )
}

detail.find = async ( id ) => {
    return await db.query( 'select * from detalle where idDetail = ?', [ id ] )
}

detail.update = async ( id, detail ) => {
    return await db.query( 'update detalle set ? where idDetail = ?', [ detail, id ] )
}

detail.delete = async ( id ) => {
    return await db.query( 'delete from detalle where idDetail = ?', [ id ] )
}

module.exports = detail