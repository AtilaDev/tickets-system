// Comando para establecer la conexión
const socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
  console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {
  console.log('Desconectado del servidor.');
});

// Actualiza la página apenas entra al sitio
socket.on('estadoActual', function(data) {
  label.text(data.actual);
});

$('button').on('click', function() {
  socket.emit('siguienteTicket', null, function(siguienteTicket) {
    label.text(siguienteTicket);
  });
});
