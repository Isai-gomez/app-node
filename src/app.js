const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
//initalitations
const app = express();
//settings
app.set('port',process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs(
  {
    defaultLayout:'main',
    layuotsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars'),
  }
));
app.set('view engine', 	'.hbs');
// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Global Variabls
app.use((req, res, next) => {
next();
})
//Router
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));
//Public
app.use(express.static(path.join(__dirname, 'public')));
//Starting the sever
app.listen(app.get('port'),() => {
console.log('Server on port', app.get('port')); 
});
 
