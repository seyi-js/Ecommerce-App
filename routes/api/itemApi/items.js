const express = require('express');
const router = express.Router();
const Items = require( '../../../Models/itemModels/item' );
const { findById, redirectLogin } = require( '../../../middleware/auth' );
const multer = require( 'multer' )
let upload;
const fs = require('fs')
if ( process.env.NODE_ENV === "production" ) {
    upload = multer({dest: `${__dirname}/../../../Client/build/uploads`});
} else {
    upload = multer({dest: `${__dirname}/../../../Client/public/uploads`});
}




//@route GET api/items
//@desc  GET ALL Items
//@ccess  Public

router.get('/', (req,res)=>{
    
    Items.find({})
        .sort( { date: -1 } )
    .then(items =>{
        res.json(items)
    })
    .catch(err =>{
        console.log(err)
    })
});


//@route POST api/items/post
//@desc  Create Items
//@ccess  Private

router.post( '/post',redirectLogin, findById,upload.single( "file" ), ( req, res ) => {
    var id = ''+Math.floor((Math.random() * 1000000000) + 1)
    let buff = fs.readFileSync(req.file.path);
    let base64data = buff.toString('base64');
    const newItem = new Items( {
        item_id : id,
        item_name: req.body.item_name,
        price: req.body.price,
        description: req.body.description,
        features: req.body.features,
        posted_by: userdata.email,
        item_image: base64data

    } )
    // console.log(req.file)
    Items.create(newItem)
        .then( item => {
            item.item_image.data = base64data;
            item.item_image.contenType = req.file.mimetype;
            item.save( ( err, item ) => {
                if ( err ) {
                    console.log(err)
                } else {
                    res.json(item)
                }
            })
            
    })
    .catch(err => console.log(err));
});

//@route DELETE api/items/delete/:id
//@desc  DELETE Items
//@ccess  Private

router.delete('/delete/:id', redirectLogin, (req,res)=>{
   Items.findOne({item_id: req.params.id})
   .then(item => {
       item.remove(),
        res.json(item._id)
    }
   )
   .catch( err => res.status(404).json({success: false}))
});

//@route GET api/items/:id
//@desc  GET Items
//@ccess  Private

router.get( '/:id',  ( req, res ) => {
    Items.findById(req.params.id)
        .then( item => res.status( 200 ).json( item ) )
    .catch(err => res.status(401).json(err))
    
})


//@route EDIT api/items/edit/:id
//@desc  POST Items
//@ccess  Private

router.post( '/edit/:id', redirectLogin, ( req, res ) => {
    let itemname = ''
    let itemprice = ''
    let itemdescription = ''
    let itemfeatures = ''
    Items.findOne( { item_id: req.params.id } )
        .then( item => {
            itemname = item.item_name,
            itemprice = item.price,
            itemfeatures= item.features,
            itemdescription = item.description
        } )
    
    
    
   
    console.log(item)

})






module.exports = router;