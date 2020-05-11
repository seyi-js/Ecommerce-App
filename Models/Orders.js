const mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;
const orderSchema = new mongoose.Schema( {
    customer_transact_ref: {
        type: String,
        required: true
    },
    customer_details: {
        type: ObjectId,
        ref: 'users'
    },

    items_ordered: [ {
        type: ObjectId,
        ref: 'items'
    } ],
    transaction_id: {
        type: String,
        required: true
    },
    order_status: 0,

    date: {
        type: String,
        default: new Date().toLocaleString()
    },
} )


const Order = mongoose.model( 'orders', orderSchema );
module.exports = Order