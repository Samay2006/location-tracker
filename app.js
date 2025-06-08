import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// For ES modules __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from 'public'

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.render("index")
  // res.sendFile(path.join(__dirname, 'public'));
});

io.on('connection', (socket) => {
  // When a user sends their location
  socket.on('send-location', ({ latitude, longitude }) => {
    io.emit('receive-location', {
      id: socket.id,
      latitude,
      longitude
    });
  });

  // When a user disconnects
  socket.on('disconnect', () => {
    io.emit('user-disconnect', socket.id);
  });
});

server.listen(port, () => {
  console.log(`server run at ${port}`);
});