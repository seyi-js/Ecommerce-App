import React, { Component } from 'react';
import {Form, FormGroup,Input,Label, FormText,Button, Container} from 'reactstrap';
import PayStack from './PayStack';
import util from './utils';

export class Checkout extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             address1: '',
             address2: '',
             phone1:'',
             phone2:''
        }
    }
  
    handleCheckOutDetails = (e)=>{
        e.preventDefault();
        const amount = Number(this.props.match.params.total)

        console.log(amount + 0 + 0)
        console.log(this.state)
    }
    render() {
        return (
            <React.Fragment>
            <Container>
                <Form>
                    <FormGroup>
                    <Label for="name">Full Name</Label>
                    <Input type="text" name="name" onChange={(e)=> this.setState({name: e.target.value})}></Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for="address1">Address Line 1</Label>
                    <Input type="text" name="address1" onChange={(e)=> this.setState({address1: e.target.value})}></Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for="address2">Address Line 2</Label>
                    <Input type="text" name="address2" onChange={(e)=> this.setState({address2: e.target.value})}></Input>
                    <FormText>Optional</FormText>
                    </FormGroup>
                    <FormGroup>
                    <Label for="phone1">Tel.</Label>
                    <Input type="number" name="phone1" onChange={(e)=> this.setState({phone1: e.target.value})}></Input>
                    </FormGroup>
                     <FormGroup>
                    <Label for="phone2">Alternative Tel.</Label>
                    <Input type="number" name="phone2" onChange={(e)=> this.setState({phone2: e.target.value})}></Input>
                    <FormText>Optional</FormText>
                    </FormGroup>
                    <Button onClick={(e)=> this.handleCheckOutDetails(e)}><PayStack name={this.state.name} phone={this.state.phone1} amount={parseInt(this.props.match.params.total + 0 + 0)}/></Button>
                    
                </Form>
            </Container>
            </React.Fragment>
        )
    }
}

export default Checkout
