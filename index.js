const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
/**
 * 1. standard express, add feathers
 * 2. expose services as rest endpoints
 * 3. register services
 * 4. global hooks
 * 5. socket magic
 * 6. default feathers error page
 */

// 1.
const app = express(feathers());
app.use(express.json());
// 2.
app.configure(express.rest());
// 3.
const services = [
  require('./my-service')
];
services.forEach(s => app.configure(s));
// 4.
app.hooks({ error: [ logErrors ] });
// 5.
app.configure(socketio());
app.on('connection', conn => app.channel('my-channel').join(conn));
app.publish(data => app.channel('my-channel'));
// 6.
app.use(express.errorHandler());

// listen to me!
const PORT = process.env.PORT || 3000;
app.listen(PORT).on('listening', () => {
  console.log('Listening on port:', PORT);
});

async function logErrors (ctx) {
  console.error(`\n\nError Hook\nCaught @ ${ctx.path} calling "${ctx.method}" method`);
  return;
}
