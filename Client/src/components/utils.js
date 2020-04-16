export default {
    formatCurrency: ( num ) => {
        return 'NGN' + Number( num.toFixed( 1 ) ).toLocaleString() + ' ';
    },

    currency: ( num ) => {
        return  Number( num.toFixed( 1 ) ).toLocaleString() + ' ';
    }
}