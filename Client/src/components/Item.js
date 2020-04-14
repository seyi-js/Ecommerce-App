 //Delete Item From chart
 delItem = () => {
	var rem1 = document.getElementsByClassName( 'rem1' );
	rem1[0].remove()
	console.log(rem1)
}
//Decrease Number of Goods
 valueMinus = (e) => {
	 var divUpd = e.target.nextElementSibling;  
	 var newVal = parseInt( divUpd.innerText, 10 ) - 1;
	 if ( newVal >= 1 ) {
		  divUpd.innerText = newVal;
	 }
}

//Increase Number of Goods
 valuePlus = (e) => {
   
	 var divUpd = e.target.previousElementSibling;
	 var newVal = parseInt( divUpd.innerText, 10 ) + 1;
	  divUpd.innerText = newVal;
	
	
}






<div className="checkout">
<div className="container">
	<h3 className="animated wow slideInLeft" data-wow-delay=".5s">Your shopping cart contains: <span>3
			Products</span></h3>
	<div className="checkout-right animated wow slideInUp" data-wow-delay=".5s">
		<table className="timetable_sub">
			<thead>
	<tr>
		<th>SL No.</th>	
		<th>Product</th>
		<th>Quality</th>
		<th>Product Name</th>
		<th>Service Charges</th>
		<th>Price</th>
		<th>Remove</th>
	</tr>
</thead>
<tr className="rem1">
	<td className="invert">1</td>
	<td className="invert-image"><a href="single.html"><img src="images/22.jpg" alt=" " className="img-responsive" /></a></td>
	<td className="invert">
		 <div className="quantity"> 
			<div className="quantity-select">                           
				<div className="entry value-minus" onClick={this.valueMinus}>&nbsp;</div>
				<div className="value"><span id="value">1</span></div>
				<div className="entry value-plus active" onClick={this.valuePlus}>&nbsp;</div>
			</div>
		</div>
	</td>
	<td className="invert">Black Shoe</td>
	<td className="invert">$5.00</td>
	<td className="invert">$290.00</td>
	<td className="invert">
		<div className="rem">
			<div className="close1" onClick={this.delItem}> </div>
		</div>
	</td>
</tr>
		</table>
	</div>
	<Checkout/>
</div>
</div>