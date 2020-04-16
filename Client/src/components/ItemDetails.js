import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom'
import { addToCart } from '../actions/itemActions';
import { connect } from 'react-redux';



export class ItemDetails extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            details: ''
        }
}
    componentDidMount() {
        this.getItemDetails()
        
    }
    getItemDetails() {
        let itemId = this.props.match.params.id;
        
        Axios
            .get( `/api/items/${ itemId }` )
            .then( res => {
                this.setState( { details: res.data } );
                
            } )
            .catch( err => console.log( err ) );
    };

	// Add to Cart
	addTocart = ( id ) => {
	
		
		
        this.props.addToCart(id)
    
    
            }
    render() {
        return (
            <div>
                
                <div className="container">
                <br/>
                <Link className="btn btn-primary" to="/">Back</Link>
                <br/>
                <h1>{ this.state.details.item_name }</h1>
                
               
                </div>
                 
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    item: state.item,
    })


export default connect(mapStateToProps, {addToCart})(ItemDetails);

