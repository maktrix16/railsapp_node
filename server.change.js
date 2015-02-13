var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var app=express();

// app.use(express.static(path.join(__dirname, "./static")));
// app.use(bodyParser.urlencoded());
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine','ejs');

// app.get('/',function(req,res){
// 	res.render('index');
// });

var server = app.listen(8001,"52.0.241.198");
var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){

	socket.on('emit_new_user',function(){
		console.log(socket.id);
	});

	socket.on('message_emit',function(data){
		console.log(data);
		socket.broadcast.emit('message_broadcast',data);
	});

});
