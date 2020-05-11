
import React, { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, InputGroup,
    InputGroupAddon,
    FormText,
    InputGroupText } from 'reactstrap';
import CKEditor from 'ckeditor4-react';
import { makeStyles } from '@material-ui/core/styles';
import Buton from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));
export const Edit = () => {
    const [ item_name, setItem_name ] = useState( '' )
    const [ description, setDescription ] = useState( '' )
    const [ features1, setFeatures1 ] = useState( '' )
    const [ features2, setFeatures2 ] = useState( '' )
    const [ features3, setFeatures3 ] = useState( '' )
    const [ features4, setFeatures4 ] = useState( '' )
    const [ features5, setFeatures5 ] = useState( '' )
    const [ price, setPrice ] = useState( '' )
    const [ product_id, setProductId ] = useState( '' )
    const [ filename, setFilename ] = useState( 'Choose Product Image' );
    const [ file, setFile ] = useState( {} )

    const onChange = e => {
        setFile( e.target.files[ 0 ] )
        setFilename( e.target.files[ 0 ].name )
    }
    const onSubmitAddNewItem = ( e ) => {
        e.preventDefault();
        const features = {
            features1,
            features2,
            features3,
            features4,
            features5,
        }
        const newItem = {
            item_name,
            description,
            features,
            price,
            file
        }
        console.log( newItem )
    }

  const  onChangeInEditor = ( evt) => {
        const data = evt.editor.getData()
        setDescription( data)
        }
        const classes = useStyles();
    return (
        <React.Fragment>
            <Container style={ { marginBottom: '100px' } }>
                

                <Form>
                <FormGroup>
                <Label style={style}>Product Id</Label>
                <Input type="text" name="product" placeholder="Enter Product Id"
                   onChange={ e => setProductId( e.target.value ) } ></Input>
            </FormGroup>
                </Form>
        <Form onSubmit={ onSubmitAddNewItem } >
            <FormGroup>
                <Label style={style}>Product Name</Label>
                <Input type="text" name="item_name" placeholder="Enter Product Name"
                 value={item_name}   onChange={ e => setItem_name( e.target.value ) } ></Input>
            </FormGroup>
            <FormGroup>
                <Label style={style}>Features</Label>
                <Input type="text" name="features" placeholder=""
                 value={features1}   onChange={ e => setFeatures1( e.target.value ) }></Input>
                   
                   
                  
                   
            </FormGroup>
            <FormGroup>
            <Input type="text" name="features" placeholder=""
            value={features2}   onChange={ e => setFeatures2( e.target.value ) }></Input>
                <FormText>Optional</FormText>
            </FormGroup>
            <FormGroup>
            <Input type="text" name="features" placeholder=""
            value={features3}    onChange={ e => setFeatures3( e.target.value ) }></Input>
                    <FormText>Optional</FormText>
            </FormGroup>
            <FormGroup>
            <Input type="text" name="features" placeholder=""
            value={features4}    onChange={ e => setFeatures4( e.target.value ) }></Input>
                    <FormText>Optional</FormText>
            </FormGroup>
            <FormGroup>
            <Input type="text" name="features" placeholder=""
            value={features5}    onChange={ e => setFeatures5( e.target.value ) }></Input>
                    <FormText>Optional</FormText>
            </FormGroup>
          
            <FormGroup>
                <Label style={style}>Description</Label>
                <CKEditor
                type='classic'
                
                onChange={onChangeInEditor} />
                
                
            
                
            </FormGroup>
            <FormGroup>
            <div className={classes.root}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file" onChange={ onChange } 
            />
            <label htmlFor="contained-button-file">
              <Buton variant="contained" color="info" component="span">
                Upload
              </Buton>
            </label>
          
          </div>
            </FormGroup>
            
            <FormGroup>
                <Label style={style} htmlFor="price">Price</Label>
                <div className="controls">
                  <InputGroup className="input-prepend">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>NGN</InputGroupText>
                    </InputGroupAddon>
                                <Input id="price" size="16" type="text" value={ price}onChange={ e => setPrice( e.target.value ) } placeholder="Enter Product Price" />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>.00</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </FormGroup>
            <Button className="btn btn-info" > Post Product</Button>

        </Form>
    </Container >
        </React.Fragment>
    )
}
const style = {
    fontSize: '20px',
    
}
export default Edit