import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import { Link} from 'react-router-dom'
import { addToCart } from '../actions/itemActions';
import { connect } from 'react-redux';
// import Moment from "react-moment"
import util from './utils';


export const ItemDetails =(props)=> {
    const [ details, setDetails ] = useState( {} );
    const [image, setImage] = useState('')
    
    useEffect( () => {
       getItemDetails()
   },[])
   const  getItemDetails = () => {
        let itemId = props.match.params.id;

        Axios
            .get( `/api/items/${ itemId }` )
            .then( res => {
                setDetails( res.data );
                setImage(res.data.item_image.data)

            } )
            .catch( err => console.log( err ) );
    };

    // Add to Cart
   const  addTocart = ( id ) => {



        this.props.addToCart( id )


    }
   
        // const  data  = details.item_image.data
        // console.log(image)
        return (
            <React.Fragment>

                <div className="container">
                    <br />
                    <Link className="btn btn-primary" to="/">Back</Link>
                    <br />
                    <hr />
                    <div className=" text-center">
                    <img src={ util.getImg( image ) } className="img-responsive " /> 
                    </div>
                    
                    <hr />
                    <div className="card">
                   
                        <h5 className="card-header">
                            { details.item_name }
                        </h5>
                        <div className="card-body">
                            <p className="card-text">{ details.description}</p>
                        </div>
                        
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Features</strong>: {details.features }
                        </li>
                        <li className="list-group-item">
                            <strong>Price</strong>:{ " " }
                            { util.formatCurrency( parseInt(details.price)) }
                        </li>
                        <li className="list-group-item">
                            <strong>Posted Date</strong>:{ " " }
                            {details.posted_date}
                        </li>
                    </ul>
                    <hr />

                </div>

            </React.Fragment>
        )
    
}
const mapStateToProps = ( state ) => ( {
    item: state.item,
} )


export default connect( mapStateToProps, { addToCart } )( ItemDetails );

