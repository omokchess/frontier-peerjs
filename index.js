import express from 'express';
import { ExpressPeerServer } from 'peer';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: true
});

app.use('/peerjs', peerServer);

app.get('/', (req, res) => {
  res.send('FRONTIER PeerJS server running');
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`PeerJS server on port ${PORT}`);
});
