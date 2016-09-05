//https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/tp-la-todo-list
/*jslint devel: true, vars: true */

var express = require('express');

var session = require('cookie-session'); // Charge le middleware de sessions

var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});


var app = express();



/* On utilise les sessions */

app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    secret: 'todotopsecret'
}))


    .use(function(req, response,next){
	// req.session.todolist=[10,2,3,4];
	if (typeof(req.session.todolist) == 'undefined'){
	    req.session.todolist=[];
	}else{
	    // response.end("good");
	    // req.session.todolist=[10,2,3,4];
	}
	next();
    } )


/** Gestion des routes en-dessous

    =lister */
    .get('/', function (req, response) {
	"use strict";
	//https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

	

	response.render('todolistMoi.ejs', {
	    vecth:req.session.todolist});
    });


// ...




app.post('/todo/ajouter/', urlencodedParser,function (req, res) {
    "use strict";
req.body.
});



/*moi*/
//  app.put('/todo/supprimer/:id', function (req, res) {
function vari(va){
    console.log("vari AV="+va);
    return va;
}
app.get('/todo/supprimer/id', function (req, res) {
    "use strict";
    console.log("todolist id="+req.params.id);
      console.log("todolist id bis="+req.params.id);
    var todolAV=req.session.todolist;
    // noref=[1,2,3,4,5,6,7,8,9,10];
    
    console.log("todolist AV="+req.session.todolist);
    v=[1,2,3,4,5,6,7,8,9,10];
    console.log("v AV="+v);
 

    //var mem=req.params.id;
    var memo=vari(req.params.id); req.session.todolist.splice(memo,1);   v.splice(req.params.id.slice(),1);//http://orizens.com/wp/topics/javascript-arrays-passing-by-reference-or-by-value/ slice ici juste pr une copie par value
    todolAV.splice(8,1);
    
    console.log("todolist AP="+req.session.todolist);
    console.log("v AP="+v);
    console.log("todolAV noref AP="+todolAV);
    console.log("vari AP memo="+memo);
 /* var  isInst =  req.session.todolist instanceof Array ;
    console.log("instanceof ="+isInst);*/
    
    res.writeHead(302, {
	'Location': 'http://localhost:3615/'
	//add other headers here...
    });
    
    res.end();
});



var   v,noref;


app.get('/initt', function (reqq, resp) {
    "use strict";
    reqq.session.todolist=[1,2,3,4,5,6,7,8,9,10];
       v=[1,2,3,4,5,6,7,8,9,10];
      
    resp.writeHead(302, {
	'Location': 'http://localhost:3615/'
	//add other headers here...
    });
      resp.end();
});




// forms POST http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js

//use
app.listen(3615);
