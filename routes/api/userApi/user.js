const express = require('express');
const router = express.Router();
const User = require( '../../../Models/userModels/user' )
const bcrypt = require( "bcryptjs" );
const { redirectLogin, findById } = require( '../../../middleware/auth' );
const Items = require('../../../Models/itemModels/item')

//@route POST api/user/addToCart/:id
//@desc  Add to Cart Items
//@ccess  Private

router.post( '/addToCart/:id', findById, ( req, res ) => {
    const id = req.params.id;
    userdata.cart_item.push( id )
    userdata.save()
        .then( user => res.json( user ) )
    
} );

//@route POST api/user/delCart/:id
//@desc  Add to Cart Items
//@ccess  Private
router.delete( '/delCart/:id', findById, ( req, res ) => {
    const id = req.params.id;
    var item = userdata.cart_item
    var data = item.filter( item => item == id )
    var index = item.indexOf( id )
    item.splice( index, 1 )
    
    // var del = item[ index ].remove()
    
    // console.log( del )
    User.findOneAndUpdate(
        {_id: userdata._id}, 
        {$pull: {cart_item: { id}}},
        function(err, data){
           if(err) return err;
           console.log(data);
    });
    
   
})





//@route POST api/user/login
//@desc  Login Users
//@ccess  Public
router.post('/login', (req,res)=>{
    const {email, password} = req.body;
    if ( !email || !password ) {
        res.status( 400 ).json( { msg: 'Please Enter All Fields' } )
    } else {
        User.findOne( { email } )
            .then( user => {
                if ( !user ) {
                    res.status( 400 ).json( { msg: 'Invalid Credentials' } )
                } else {

                    bcrypt.compare( password, user.password )
                        .then( isMatch => {
                            if ( !isMatch ) {
                                res.status( 400 ).json( { msg: 'Invalid Credentials' } )
                            } else {
                                req.session.userId = user._id;
                                const session = req.session;
                                res.json( {
                                    session,
                                    user: {
                                        id: user._id,
                                        name: user.name,
                                        email: user.email,
                                         isAdmin: user.isAdmin
                                    }
                                } )
                            }
                        } )
                }
            } )
    }
});


//@route POST api/user/register
//@desc  POST Register User
//@ccess  Public

router.post('/register', (req,res)=>{
    const {name, email, password, password2, } = req.body;
    if ( !name || !email || !password || !password2 ) {
        res.status( 400 ).json( { msg: 'Please Enter All Fields' } )
    } else {
        if ( password !== password2 ) {
        res.status( 400 ).json( { msg: 'Passwords do not match' } )
    } else {
        User.findOne( { email } )
            .then( user => {
                if ( user ) {
                    res.status( 400 ).json( { msg: 'User already Exist' } )
                } else {
                    const newUser = new User( {
                        name,
                        email,
                        password,
                        isAdmin: false
                    } );

                    bcrypt.genSalt( 10, ( err, salt ) => {
                        bcrypt.hash( newUser.password, salt, ( err, hash ) => {
                            if ( err ) {
                                throw err;
                            } else {
                                newUser.password = hash;
                                newUser.save()
                                    .then( user => {
                                        req.session.userId = user._id;
                                        const session = req.session;
                                        res.json( {
                                            session,
                                            user: {
                                                id: user._id,
                                                name: user.name,
                                                email: user.email,
                                                isAdmin: user.isAdmin
                                            }
                                        } )
                                    } )
                            }
                        } )
                    } )
                }
            } )
    }
    }
     
});

//@route GET api/user/user
//@desc  GET  UserData
//@ccess  Private



// Users Logout route
router.get("/logout",  (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(401).json({msg : 'Nan'});
    } else {
      res.clearCookie(process.env.SESSION_NAME);
      res.json({msg: "Done"});
    }
  });
});

//@route GET api/user/user
//@desc  GET  UserData
//@ccess  Private

router.get( '/user', redirectLogin, findById, ( req, res ) => {
    
    res.json( userdata )
} );
module.exports = router;













module.exports = router;