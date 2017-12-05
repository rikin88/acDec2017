var express = require('express');
var esClient = require('./connection.js');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

var viewPath = '/views/';
var myRouter = express.Router();

myRouter.route('/Search')
	.get(function(req,res) {

		var query = {};
		if(req.query.product) {
			query.product = req.query.product;
		}

		var result = "";

		esClient.search({  
  			index: 'productlist',
  			type: 'product',
				body: {
					//query: {
			      	//	match: {"name" : query.product}
			    	//},
			    	size: 15,
			    	query : {
			    		match_phrase_prefix: {
			    			name: {
			    				query: query.product,
			    				max_expansions: 50
			    			}
			    		}
			    	}
				}
			} , function (error, response, status) {
			    if (error){
			      console.log("search error: "+error)
			    }
			    else {
				    response.hits.hits.forEach(function(hit){
				      result = result + '{ "id":' + '"' + hit._id  + '"' + ', "name":' +  '"' + hit._source.name + '"' + '},';
				    });
				    result= result.substring(0, result.length - 1); 
				    var resultString = '{ "products" : [' + result + ' ]}';
				    //var resultString = '[' + result + ']';
						//var resultString= '{ ' + result + ' }';
						//var resultString = result;
				    //console.log("Result String is : " + resultString);
				    res.json(resultString);
			    }
			});
	});

//http://localhost:8000/api/Search?&product=dura
app.use('/api', myRouter);


app.get('/', function(req, res) {
	console.log('path is: ' + path.__dirname);
	res.sendFile(path.join(__dirname +'/index.html'));
});

app.listen(port, function() {
	console.log('Gulp is running on port ' + port) ;
})


