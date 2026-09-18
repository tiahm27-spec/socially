const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// Real-Time Room & Canvas Synchronization
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle joining virtual rooms
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    io.to(roomId).emit('user-joined', { userId: socket.id });
  });

  // Relay live drawing movements on the shared canvas
  socket.on('draw-stroke', ({ roomId, strokeData }) => {
    socket.to(roomId).emit('draw-stroke', strokeData);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(4000, () => {
  console.log('Socially Real-time Server listening on port 4000');
});
