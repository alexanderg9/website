// var fs = require('fs');
// var express = require('express');

// const hostname = 'localhost';
// const port = 8080;

// var server = express();
// server.use(express.static(__dirname + '/public'));

// server.listen(port, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
// });

	      
var express = require('express');
 
var server = express();
server.use(express.static(__dirname + '/public'));
 
var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
