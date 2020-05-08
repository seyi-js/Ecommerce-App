export default {
    formatCurrency: ( num ) => {
        return 'NGN' + Number( num.toFixed( 1 ) ).toLocaleString() + ' ';
    },

    currency: ( num ) => {
        return  Number( num.toFixed( 1 ) ).toLocaleString() + ' ';
    },



     getImg: (img) => {
        const byteCharacters = atob(img);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        
		let image = new Blob( [ byteArray ], { type: 'image/jpeg' } );
		// setImageUrl( URL.createObjectURL( image ) )
		const url =  URL.createObjectURL( image )
		return url
            
     }
}