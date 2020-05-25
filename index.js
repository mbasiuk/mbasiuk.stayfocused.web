var wsUri = 'ws://207.191.157.79';
var websocket = new WebSocket(wsUri);
var performance = document.performance;

websocket.addEventListener('error', function (ev) {
    console.error(ev);
});

websocket.addEventListener('open', function (ev) {
    var collected = JSON.stringify(performance);
    console.log('open', ev, performance, collected);
    websocket.send(collected);
});

websocket.addEventListener('close', function (ev) {
    console.log('close', ev);
});

websocket.addEventListener('message', function (ev) {
    console.log('message', ev)
});