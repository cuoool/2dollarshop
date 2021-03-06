const http = require('http');
const { config } = require('@bonnak/toolset');

config.load(require('./config'));

const app = require('./app');

const PORT = process.env.PORT || 8000;
app.set('port', PORT);

const server = http.createServer(app);

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port: ${PORT}`;
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges.`);
      break;
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use.`);
      break;
    default:
      throw error;
  }

  process.exit(1);
});

server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${PORT}`;
  // eslint-disable-next-line no-console
  console.log(`Listening on ${bind}`);
});

server.listen(PORT);
