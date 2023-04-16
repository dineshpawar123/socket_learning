// var app = require('express')();
// var http = require('http').Server(app);

// app.get('/', function(req, res){
//    res.sendFile('/home/lnv219/Documents/Dinesh folder/Practice-Projects/socket/index.html');
// });

// http.listen(3000, function(){
//    console.log('listening on *:3000rrrrrrrrr');
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){ res.sendFile('/home/lnv219/Documents/Dinesh folder/Practice-Projects/socket/index.html');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){  // first parameter is event and second parameter is event listener
   console.log('A user connected at id',socket.id);
   
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      // console.log('A user disconnected');
   });

   socket.on('message', function (msg) {
      console.log('message from client',msg);

   socket.emit('servermsg',"this is msg from server");
   });

   socket.emit('servermsg2','this is messsage from client');
   socket.emit('servermsg3','this is messsage from client');
   socket.emit('servermsg4','this is messsage from client');

});

http.listen(3000, function(){
   console.log('listening on *:3000');
});