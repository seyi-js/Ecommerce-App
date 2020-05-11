
import {
Button,
Modal,
ModalHeader,
ModalBody,
ModalFooter,

NavLink,

Table
} from 'reactstrap';
import React, { useState  } from 'react'
import util from './utils';
import { useHistory } from "react-router-dom";


export  const Chart  =(props)=>{
    const [ modal, setModal ] = useState( false )
    const [backdrop, setBackdrop] = useState(false)
    // const [itemsId, setItemsId] = useState([])
    const history =useHistory()
  
     
 const   toggle = () => {
         setModal( !modal)
            }
    

   const  checkoutOption = (total) => {
       if ( total ) {

        
           localStorage.setItem( 'total', total );
           let id = []
           chartItems.map( ( item ) => {
               id.push(item._id)
           } )
        //    console.log(id)
           localStorage.setItem( 'itemsId', JSON.stringify(id) );
            
          
           history.push('/checkout')
        
           
           
       } else {
           return null
       }
    }

   
        const { chartItems, isAuthenticated} = props;
       
        return (
            <React.Fragment>
    <NavLink onClick={toggle} href="#">
        Cart
    </NavLink>
    
            <React.Fragment>
                 
                <Modal isOpen={ modal } toggle={ toggle } backdrop={ backdrop }>
                    <ModalHeader toggle={ toggle }>
                        Shopping Cart
                    </ModalHeader>
                
                    <ModalBody>
                   {chartItems.length === 0 ? 'Basket is Empty' : 
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
                       { chartItems.map( ( item ) => (
                           <tr className="rem1">
                          
                           <td>{ item.item_id }</td>
                           <td>Not Available</td>

                           <td className="">
                              
                                      
                                       <div className="value">{item.count}</div>
                                       
                                  
                           </td>
                           <td>{ item.item_name }</td>
                           <td>{util.formatCurrency(item.price * item.count)} </td>
                           <td><div className="rem">
                               <button className="btn btn-danger sm"
                                   onClick={ (e)=>props.handleRemoveChart( e, item) }> &times;</button>
                           </div></td>
                       </tr>
                       ) )}
                           
                       
                       

                   </tbody>
                   <tfoot>
                       <tr>
                           <td colspan="4"><h3>Sum</h3></td>
                           <td>{util.formatCurrency(chartItems.reduce((a,c)=>a + c.price*c.count, 0))}</td>
                           <td colspan="2"></td>
                       </tr>
                   </tfoot>
               </Table> 
               
               }
                </ModalBody>
              
                    
                
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Continue Shopping</Button>{' '}
                        
                        {(chartItems.length !== 0 && isAuthenticated) ?
                         <Button color="secondary" onClick={e=>checkoutOption(chartItems.reduce((a,c)=>a + c.price*c.count, 0))} >Proceed to Checkout</Button> : ''}
                       
                    </ModalFooter>
                    
                        
                
                </Modal>
                </React.Fragment>
            
               
                
       

</React.Fragment>
        )
    
}

export default Chart


