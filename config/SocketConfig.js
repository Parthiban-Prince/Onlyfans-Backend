import { Server } from 'socket.io';

export function socketConfig(server) {
  const io = new Server(server, {
    cors: {
      origin: '*', // or specify exact origin(s)
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('message', (data) => {
      console.log('Message received:', data);
      io.emit('message', data); // broadcast to all
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
}
