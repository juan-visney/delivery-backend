const sale = require( '../models/sale' )
const detail = require( '../models/detail' )
const product = require( '../models/product' )

const controller = {}

controller.getDetails = async ( req, res ) => {
    const query = await detail.getSale( req.params.id )
    res.json( query )
}

controller.getSale = async ( req, res ) => {
    const _sale = await sale.get()
    res.json( _sale )
}

controller.findSale = async ( req, res ) => {
    const query = await sale.find( req.params.id )
    res.json( query )
}

controller.createSale = async ( req, res ) => {
    const { idClient, cost, estado, details } = req.body
    const _sale = { idClient, cost, estado }
    const query = await sale.create( _sale )
    const id = query.insertId
    details.forEach( async _detail => {
        _detail.idSale = id
        await detail.create( _detail )
        const _product = await product.find( _detail.idProduct )
        _product[ 0 ].quantity = _product[ 0 ].quantity - _detail.lot
        await product.update( _product[ 0 ], _detail.idProduct )
    } )
    res.json( { msg: 'ok' } )
}

controller.completeSale = async ( req, res ) => {
    const details = await detail.getSale( req.params.id )
    let cost = 0
    details.forEach( function ( _detail ) {
        cost += _detail[ "lot" ] * _detail[ "price" ]
    } )
    const query = await sale.completed( req.params.id, cost )
    res.json( { msg: ( query ? 'Sale updated' : 'Sale not updated' ) } )
}

controller.deleteSale = async ( req, res ) => {
    const query = await sale.delete( req.params.id, req.body )
    res.json( { msg: ( query ? 'Sale deleted' : 'Sale not deleted' ) } )
}

module.exports = controller