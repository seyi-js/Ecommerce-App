import React, {useState, useEffect } from 'react';
import { getItems, addToCart } from '../actions/itemActions';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Link,  } from 'react-router-dom';
import util from './utils';
import Axios from 'axios'
import SelectBar from './SelectBar';
import Chart from './chart'


export const Collections = (props) =>{
	// const { items, loading} = props.item;
	const [ sort, setSort ] = useState('');
	const [ items, setItems ] = useState( '' );
	const [ filteredItem, setFilteredItems ] = useState([]);
	const [ chartItems, setChartItems ] = useState( [] );

	//Proptypes
	Collections.propTypes = {
	getItems: propTypes.func.isRequired

	}
	

	//Get Items onLoad
	useEffect( () => 
	{
		getItem();
		
	
	}, [])
	
	//Get Items
	const getItem = () => {
		Axios
        .get( 'api/items' )
			.then( res => {
				setFilteredItems( res.data )
				setItems(res.data)
    })
        .catch( err => {
            console.log(err)
        });
		props.getItems();
		if(localStorage.getItem('chartItems')){
			setChartItems((JSON.parse(localStorage.getItem('chartItems'))))
		}
	
	}
	const handleChangeSort= (e) =>{
		setSort( e.target.value );
		
		listFilteredItem(e.target.value);
	}

	const listFilteredItem = (sit) => {
		setFilteredItems( state => {
      if (sit !== "") {
        items.sort((a, b) =>
          sit === "lowest"
            ? parseInt(a.price) > parseInt(b.price)
              ? 1
              : -1
            : parseInt(a.price) < parseInt(b.price)
            ? 1
            : -1
        );
      } else {
        items.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
     
      return  items ;
    } )
		
	}
		
	const handleRemoveChart = (e, item) => {
		setChartItems(state=>{
			const chart = chartItems.filter(elm => elm._id !== item._id);
			localStorage.setItem('chartItems',JSON.stringify( chart));
			return chart
				
				
		})
	}	


	const handleAddToCart = (e, product) => {
		setChartItems( state => {
			const cartItems = chartItems;
			let productAlreadyIncart = false;

			cartItems.forEach(item => {
				if(item._id === product._id ){
					productAlreadyIncart = true;
					item.count++;
				}
			});
			if(!productAlreadyIncart){
				cartItems.push({...product, count:1})
			}
			localStorage.setItem('chartItems',JSON.stringify( chartItems));
			return chartItems
		})
	}
			
 
	const { isAuthenticated } = props;
			
		

				const notLoading = (
				<React.Fragment>
					

						<Container className="text-center" style={{marginBottom: '100px'}}>
						<button className="btn  " > <Chart handleRemoveChart={ handleRemoveChart}
						
						chartItems={ chartItems } isAuthenticated={isAuthenticated} />
						</button>
							<Row>
								
								{ filteredItem.map( (item ) => (

								<Col key={item._id}>
								<div className="" >
									{}

									<Link to={`/item/details/${item._id}`}>
												{ item.item_image ? <img src={util.getImg(item.item_image.data)} className="img-responsive" />: <img src='../images/index.png' className="img-responsive" /> }
									
									</Link>
									<h3>{ item.item_name }</h3>
												<h4>{ util.formatCurrency( parseInt(item.price)) }</h4>
									
									<button className="btn btn-info text-center" onClick={(e)=>{handleAddToCart(e, item)}}>Add To Cart</button>	

								</div>
							</Col>

							))}




						</Row>
					</Container>
				
				}

			</React.Fragment>
			)
			return (

				<React.Fragment>
					
					<div className="mt-10" style={ { marginTop: '100px' } }>
						<SelectBar filteredItems={ filteredItem } sort={ sort } handleChangeSort={ handleChangeSort } />
						
						
						
					{

					notLoading


					}
				</div>
			</React.Fragment>


			)
			}
			

			const mapStateToProps = (state) =>({
				item: state.item,
				isAuthenticated: state.auth.isAuthenticated
			})

			export default connect(mapStateToProps, {getItems, addToCart})(Collections);
