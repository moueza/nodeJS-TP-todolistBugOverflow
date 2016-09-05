/*jslint devel: true, vars: true */

var express = require('express');

var session = require('cookie-session');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});


var app = express();



app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    secret: 'todotopsecret'
}))


    .use(function(req, response,next){
	if (typeof(req.session.todolist) == 'undefined'){
	    req.session.todolist=[];
	}else{
	}
	next();
    } )


    .get('/', function (req, response) {
	"use strict";

	

	response.render('todolistMoi.ejs', {
	    vecth:req.session.todolist});
    });



app.post('/todo/ajouter/', function (req, res) {
    "use strict";

});



app.get('/todo/supprimer/id', function (req, res) {
    "use strict";
    

    req.session.todolist.splice(req.params.id,1);   
    
    
    
    res.writeHead(302, {
	'Location': 'http://localhost:3615/'
    });
    
    res.end();
});




app.get('/initt', function (reqq, resp) {
    "use strict";
    reqq.session.todolist=[1,2,3,4,5,6,7,8,9,10];
    
    
    resp.writeHead(302, {
	'Location': 'http://localhost:3615/'

    });
    resp.end();
});


app.listen(3615);
