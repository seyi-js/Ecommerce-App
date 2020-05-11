import React, { useState, useEffect} from 'react';
import {Form, FormGroup,Input,Label, FormText,Button, Container} from 'reactstrap';
import Homeheader from './homeHeader'
import Footer from './Admin/Dashboard/Footer'
import Axios from 'axios'
import { connect } from 'react-redux';
import Payment from './Payment'
export const Checkout = ( props ) => {
    
    const [firstname, setFirstName]= useState(props.user.first_name)
    const [lastname, setLastName]= useState(props.user.last_name)
    const [address1, setAddress1]= useState(props.user.address1)
    const [address2, setAddress2]= useState(props.user.address2)
    const [phone1, setPhone1]= useState(props.user.phone1)
    const [phone2, setPhone2]= useState(props.user.phone2)
    const [ toggle, setToggle ] = useState( false )
    const [email, setEmail] = useState(props.user.email);
    const handleCheckOutDetails = ( e ) => {
        e.preventDefault();
        const amount = Number( localStorage.getItem( 'total' ) )
        
        // console.log(amount + 0 + 0)
        // console.log(this.state)
        if ( firstname === '' ||
            lastname === '' ||
            address1 === '' ||
            phone1 === '' 
    
        ) {
            return null
        } else {
           

            // console.log( updateUser )

            const config = {
                headers: {
                    "content-type": "application/json"
                }
            }
            
            const body = JSON.stringify( { firstname,
                lastname,
                address1,
                address2,
                phone1,
                phone2
            } );
            

            Axios
                .post( 'api/user/checkout', body, config )
                .then( res => setToggle(!toggle) )
            .catch(err=> console.log(err))
        }



    }
    
    // useEffect( () => {
    //     console.log(props.user._id)
    // })
 
        return (
            <React.Fragment>
                <Homeheader/>
            <Container  style={{marginBottom: '100px'}} >
               {(!toggle) ? <Form>
                <FormGroup>
                <Label for="name">First Name</Label>
                <Input type="text" name="name" value={firstname} onChange={(e)=> setFirstName( e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                <Label for="name">Last Name</Label>
                <Input type="text" name="name"  value={lastname} onChange={(e)=> setLastName( e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                <Label for="address1">Address Line 1</Label>
                <Input type="text" name="address1"  value={address1} onChange={(e)=> setAddress1( e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                <Label for="address2">Address Line 2</Label>
                <Input type="text" name="address2"  value={address2} onChange={(e)=> setAddress2( e.target.value)}></Input>
                <FormText>Optional</FormText>
                </FormGroup>
                <FormGroup>
                <Label for="phone1">Tel.</Label>
                <Input type="tel" name="phone1"  value={phone1} onChange={(e)=> setPhone1( e.target.value)}></Input>
                </FormGroup>
                 <FormGroup>
                <Label for="phone2">Alternative Tel.</Label>
                <Input type="tel" name="phone2"  value={phone2} onChange={(e)=> setPhone2(e.target.value)}></Input>
                <FormText>Optional</FormText>
                </FormGroup>
                <Button onClick={(e)=> handleCheckOutDetails(e)} >Next</Button>
                
            </Form> : <Payment email={email} phone={phone1} firstname={firstname} lastname={lastname} />}
                </Container>
               <Footer/>
            </React.Fragment>
        )
    
}


const mapStateToProps = ( state ) => ( {
    user: state.auth.user
})

export default connect(mapStateToProps, null)(Checkout)
