const express = require('express');
const bodyParser = require( 'body-parser' );
const PORT = process.env.PORT || 2000;
const app = express();
const path = require( 'path' );
var session = require( "express-session" );
const mongoose = require( 'mongoose' );
const cookieParser = require('cookie-parser');
const expressLayouts = require( 'express-ejs-layouts' );
const MongoStore = require( 'connect-mongo' )( session );
mongoose.set('useCreateIndex', true);
var paystack = require("paystack-api")("sk_test_1929b5c17dc229cb0f58b21523d007e61b23e1ea");
let db;

//switch btw production and dev
if ( process.env.NODE_ENV !== 'production' ) {
  db = 'mongodb://localhost:process.env.27017/EcommerceDB';
} else {
  db= process.env.MONGO_URL;
}

//Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('MongoDb Connected')
})
.catch( err=> console.log(err));
const dbo = mongoose.connection;

//Cookie Parser
app.use( cookieParser() );

//BODY PARSER CONFIG
app.use( bodyParser.json() );

//Express Session
app.use(session({
    name: process.env.SESSION_NAME,
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: dbo
    }),//Saves the Session to DataBase
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,//Expires in 24hours
        originalMaxAge: 1000 * 60 * 60 * 24,//Expires in 24hours
        
    }
})
);

//EJS CONFIG
app.use(expressLayouts);
app.set('veiws', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//SERVING STATIC FILES
app.use(express.static('static'));
app.use('/static', express.static('static'));
app.use( express.static( __dirname + '/static' ) );

const items = require( './routes/api/itemApi/items' );
const User = require('./routes/api/userApi/user')

//ROUTES
app.use('/api/items', items);
app.use('/api/user', User);

//serve static assests in production

if(process.env.NODE_ENV === 'production'){
    //set static
    app.use(express.static('Client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'Client/build', 'index.html'));
    })
}


//Catch all other route
app.get("*", (req, res) => {
    res.send("<h1>error 404 Page not Found</h1>");
});


app.listen(PORT, console.log(`Server started on port ${PORT}`));