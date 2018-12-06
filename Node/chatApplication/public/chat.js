var socket=io.connect('http://localhost:3000')

var message = document.getElementById('message'),
      handle = document.getElementById('userName'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      typing=document.getElementById('typing');


btn.addEventListener('click', function(){
  socket.emit('chat', {
      message: message.value,
      userName: userName.value
  });
  message.value = "";
});

message.addEventListener('keypress',function(){
    socket.emit('typing',userName.value);
})


socket.on('chat', function(data){
    typing.innerHTML='';
    output.innerHTML += '<p><strong>' + data.userName + ': </strong>' + data.message + '</p>';
});

socket.on('typing',function(data){
typing.innerHTML='<p><em>'+data+' is typing </p></em>';
});