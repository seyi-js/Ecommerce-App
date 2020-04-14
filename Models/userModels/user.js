const mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: false,
    date: {
        type: String,
        default: new Date().toLocaleString()
    },
    cart_items: [{
        type: ObjectId,
        ref: 'items'/*the colection i'm linking to  */// Purchased items id would be saved here
        } ],
    items_purchased:[{
	type: ObjectId,
	ref: 'items'/*the colection i'm linking to  */// Purchased items id would be saved here
    } ],
     items_posted:[{
	type: ObjectId,
	ref: 'items'/*the colection i'm linking to  */// Posted items id would be saved here for admins only
}],
    resetPasswordToken: {
        type:String
    },
    resetPasswordExpires: Date
    });

   
const User = mongoose.model('users', userSchema );
module.exports = User 