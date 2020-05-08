
import {
Button,
Modal,
ModalHeader,
ModalBody,
ModalFooter,

NavLink,

Table
} from 'reactstrap';
import React, { Component, browserHistory } from 'react'
import PropTypes from 'prop-types'
import util from './utils';
import {Link} from 'react-router-dom';


export default class Chart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modal: false,
            backdrop: false,
            
        }
    }

    
  
     
    toggle = () => {
         this.setState( {
            modal: !this.state.modal
        })
            }
    static propTypes = {
        prop: PropTypes
    }

    

    render() {
        const { chartItems, isAuthenticated} = this.props;
       
        return (
            <React.Fragment>
    <NavLink onClick={this.toggle} href="#">
        Cart
    </NavLink>
    
            <React.Fragment>
                 
                <Modal isOpen={ this.state.modal } toggle={ this.toggle } backdrop={ this.state.backdrop }>
                    <ModalHeader toggle={ this.toggle }>
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
                                   onClick={ (e)=>this.props.handleRemoveChart( e, item) }> &times;</button>
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
                        <Button color="primary" onClick={this.toggle}>Continue Shopping</Button>{' '}
                        
                        {(chartItems.length !== 0 && isAuthenticated) ?
                        <Link to={`/checkout/${chartItems.reduce((a,c)=>a + c.price*c.count, 0)}`}>
                         <Button color="secondary" >Proceed to Checkout</Button> </Link>: ''}
                       
                    </ModalFooter>
                    
                        
                
                </Modal>
                </React.Fragment>
            
               
                
       

</React.Fragment>
        )
    }
}



