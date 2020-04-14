import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteCart } from '../actions/itemActions';


import {
Button,
Modal,
ModalHeader,
ModalBody,
ModalFooter,
Form,
FormGroup,
Label,
Input,
NavLink,
Alert,
Table
} from 'reactstrap';

export const Chart = (props) => {
//
const [ modal, setModal ] = useState( false );
const [ backdrop, setBackdrop ] = useState( false );
const [ quantity, setQuantity ] = useState(1);
let carts = []
    const { cart } = props.item;
    const { cart_item } = props.cart;
    console.log(cart_item)
    
    
    
  
// console.log(cart[0])
    cart.forEach( f => {
        f.map( e => {
       carts.push(e)
   })
    } )
    // if ( cart_items.length > 1 ) {
        cart_item.forEach( f => {
            carts.push(f)
            
            
    })
    // }
    
//Toggle Modal

const toggle = () => {
setModal(!modal)
    }

    
//Delete Item From chart
const delItem = (id) => {
// var rem1 = e.target.parentElement.parentElement.parentElement;
    // rem1.remove()
    props.deleteCart(id)    

}

    
//Decrease Number of Goods
const valueMinus = (e) => {
var divUpd = e.target.nextElementSibling;
var newVal = parseInt( divUpd.innerText, 10 ) - 1;
if ( newVal >= 1 ) {
    divUpd.innerText = newVal;
   setQuantity(parseInt(newVal))
}
}
   
//Increase Number of Goods
const valuePlus = (e) => {
   
    var divUpd = e.target.previousElementSibling;
    
    
var newVal = parseInt( divUpd.innerText, 10 ) + 1;
    divUpd.innerText = newVal;
    setQuantity(parseInt(newVal))


}

    

  


return (
<React.Fragment>
    <NavLink onClick={toggle} href="#">
        Cart({carts.length})
    </NavLink>
    
            <React.Fragment>
                 
                <Modal isOpen={ modal } toggle={ toggle } backdrop={ backdrop }>
                    <ModalHeader toggle={ toggle }>
                        Shopping Cart
                    </ModalHeader>
                
                    <ModalBody>
                    <Table responsive>
                   
                        <thead >
                            <tr>
                                <th>Product Id</th>
                                <th>Product Image</th>
                                <th>Quantity</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Remove Item</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            { carts.map( ( { _id, item_name, price } ) => (
                                <tr className="rem1">
                               
                                <td>{ _id }</td>
                                <td>Not Available</td>
    
                                <td className="">
                                   
                                            <button className="btn btn-info sm"
                                                onClick={ valueMinus }>-</button>
                                            <div className="value">1</div>
                                            <button className="btn btn-info sm"
                                                onClick={ valuePlus }>+</button>
                                       
                                </td>
                                <td>{ item_name }</td>
                                <td>#{parseInt( 5000)  * quantity} </td>
                                <td><div className="rem">
                                    <button className="btn btn-danger sm"
                                        onClick={ delItem.bind(this, _id) }> &times;</button>
                                </div></td>
                            </tr>
                            ) )}
                                
                            
                            
    
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="4"><h3>Sum</h3></td>
                                <td>$180</td>
                                <td colspan="2"></td>
                            </tr>
                        </tfoot>
                    </Table>
                </ModalBody>
              
                    
                
                    
                        
                
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Continue Shopping</Button>{' '}
                        <Button color="secondary">Proceed to Checkout</Button>
                    </ModalFooter>
                </Modal>
                </React.Fragment>
            
               
                
       

</React.Fragment>
)


}



const mapStateToProps = (state) =>({
    item: state.item,
    cart: state.auth
})
export default connect(mapStateToProps,{deleteCart})(Chart);
