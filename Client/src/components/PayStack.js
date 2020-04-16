import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    NavLink
    
} from 'reactstrap';
import PaystackButton from 'react-paystack';
import {useHistory} from 'react-router-dom'

 const  PayStack = (props)=> {
const [key, setKey] = useState("pk_test_4389973b1ac812247d1068db5fda14ff995f3b71");
const [email, setEmail] = useState("foobar123@example.com");
const [amount, setAmount] = useState(props.amount);
const [modal, setModal] = useState(false);
const [name, setName] = useState(props.name);
const [phone, setPhone] = useState(props.phone)

const history = useHistory()
    	
       const  toggle = () => {
         setModal(!modal)
            }

    	const callback = (response) => {
        console.log( response ); // card charged successfully, get reference here
        

        close();
        history.push('/')
    	}

    	const close = () => {
    		
    	}

    const	getReference = () => {
    		//you can put any unique reference implementation code here
    		let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    		for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));

    		return text;
    	}

      
            return (
                    <React.Fragment>
                        <NavLink onClick={toggle} href="#">
                            Next
                            </NavLink>
                        <Modal isOpen={ modal } toggle={ toggle }>
                            <ModalHeader toggle={ toggle }>
                                Pay
                            </ModalHeader>
                            <ModalBody>
                    <div  className="container">
                        
                        <PaystackButton
                    text="Make Payment"
                    className="payButton"
                    callback={callback}
                    close={close}
                    disabled={true} /*disable payment button*/
                    embed={true} /*payment embed in your app instead of a pop up*/
                    reference={getReference()}
                    email={email}
                    firstname={name}
                    phone={phone}
                    amount={amount}
                    paystackkey={key}
                    tag="button"/*it can be button or a or input tag */
                />
            </div>
            </ModalBody>
            </Modal>
            </React.Fragment>
                );
      
    }

    export default PayStack;
