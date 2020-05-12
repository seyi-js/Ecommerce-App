import React, { useState, useEffect } from 'react';
import PaystackButton from 'react-paystack';
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
 const  Payment = (props)=> {
const [key, setKey] = useState("pk_test_4389973b1ac812247d1068db5fda14ff995f3b71");
const [amount, setAmount] = useState();


const history = useHistory();

useEffect(() => {
   setAmount(Number( localStorage.getItem( 'total' ) + 0 + 0 ) )
}, [amount])
    	

const callback = (res) => {
    if ( res.message === "Success" ) {
        localStorage.removeItem('total') 
        localStorage.removeItem( 'chartItems' ) 
        const id =JSON.parse( localStorage.getItem( 'itemsId' ) )
        const order = {
            id,
            ref: res.reference,
            transaction_id: res.trans
        }
        postOrder(order)
    
close();
history.push('/')
    } else {
        console.log(res)
    }
   
}

const close = () => {
    
     }
     
     const postOrder = ({id,ref,transaction_id}) => {
        const config = {
            headers: {
                "content-type": "application/json"
            }
        }

         const body = JSON.stringify( { id, ref, transaction_id } );
         
         Axios
             .post( 'api/items/order', body, config )
             .then( res => console.log( res ) )
             .catch( err => console.log( err ) )
         
     }

    const	getReference = () => {
    		//you can put any unique reference implementation code here
    		let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    		for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));

    		return text;
    	}
const  metadata= {
    custom_fields: [
       {
           display_name: "Mobile Number",
           variable_name: "mobile_number",
           value: `+234${props.phone}`
        },
        
        {
            display_name: "Full Name",
            variable_name: "Full Name",
            value: props.firstname + '' + '' + props.lastname
        }
    ]
 }

    
            return (
                    <React.Fragment>
                   

                    <div  className="container">
                        
                        <PaystackButton
                    text="Make Payment"
                    className="payButton"
                    callback={callback}
                    close={close}
                    disabled={true} /*disable payment button*/
                    embed={true} /*payment embed in your app instead of a pop up*/
                    reference={getReference()}
                    
                    email={ props.email }
                    metadata={metadata}
                    

                    amount={amount}
                    paystackkey={key}
                    tag="button"/*it can be button or a or input tag */
                />
            </div>
            
            </React.Fragment>
                );
      
    }

    export default Payment;
