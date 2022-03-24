const user = require( '../models/user' )

const controller = {}

controller.createUser = async ( req, res ) => {
  const _user = req.body
  const query = await user.create( _user )
  res.json( { msg: ( query ? 'user updated' : 'user not updated' ) } )
}

module.exports = controller