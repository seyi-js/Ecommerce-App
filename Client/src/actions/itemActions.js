import Axios from 'axios'
import {
    GET_ITEMS,
    DELETE_ITEMS,
    ADD_TO_CART,
    GET_ITEM,
    DELETE_CART,
    ADD_ITEM,
    ITEMS_LOADING
} from './types';


const config = {
    headers: {
        "content-type": "application/json"
    }
}
export const getItems = () => dispatch => {
    dispatch( setItemsLoading() );
    Axios
        .get( 'api/items' )
        .then( res => {dispatch( {
            type: GET_ITEMS,
            payload: res.data
        } )
    })
        .catch( err => {
            console.log(err)
        })
}

export const setItemsLoading = () =>{
    return {
        type: ITEMS_LOADING,
        
    }
}
//Delete From Cart

export const deleteCart = ( id ) => dispatch => {
    Axios
        .delete( `api/user/delCart/${ id }` )
        .then( res => dispatch( {
            type: DELETE_CART,
            payload: id
    }))
}

export const getItem = (id) => dispatch => {
    dispatch( setItemsLoading() );
    return {
        type: GET_ITEM,
        payload: id
    }
}
//Add an Item To Cart
export const addToCart = ( id ) => dispatch => {
    Axios
        .post( `api/user/addToCart/${ id }` )
        .then( res => dispatch( {
            type: ADD_TO_CART,
            payload: id
        } ) )
    .catch(err => console.log(err))
    
} 


//Edit Item
export const edit = ( {id, item_name, description,features, price} ) => {
    const body = JSON.stringify( { item_name, description, features, price } )
    Axios
        .post( `api/items/edit/${ id }`, body, config )
    .then(res => console.log(res.data))
}
//Add New Product

export const addNewItem = ( { item_name, description, features, price ,file} ) => dispatch => {

    const configure = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    const body = JSON.stringify( { item_name, description, features, price } )
    // console.log(body)
    const formData = new FormData();
    formData.append( 'file', file );
    formData.append( 'price', price );
    formData.append( 'item_name', item_name );
    formData.append( 'description', description );
    formData.append( 'features', features);
    
    Axios
        .post( 'api/items/post',formData, configure )
    .then(res => dispatch({
        type: ADD_ITEM,
        payload:res.data
    } ) )
    .catch(err => {
        console.log(err)
    })
}

//Delete Product

export const deleteProduct =(id)=> dispatch => {
    Axios
        .delete( `api/items/delete/${ id }` )
        .then( res => dispatch( {
            type: DELETE_ITEMS,
            payload: res.data
        } ) )
    .catch(err => {
        console.log(err)
    })
}


