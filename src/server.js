const { Server } = require('./ws');
const wsServer = new Server({ port: 8888 });

// socket套接字 socket电源插锁，监听客户端过来的链接
wsServer.on('connection', (socket) => {
  // onmessage 监听客户端发过来的消息
  socket.on('message', (message) => {
    console.log(message);
    socket.send(message);
  });
});
