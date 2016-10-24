
var http = require('http');


var PORTONE=7000;
var PORTTWO=7500;


function handleRequestOne(request, response){
    response.end('You is kind. You is smart. You is important.');
}

function handleRequestTwo(request, response){
    response.end('You is tired. You is broke. You is adulting.');
}


var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(PORTONE, function(){
    console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function(){
    console.log("Server listening on: http://localhost:%s", PORTTWO);
});