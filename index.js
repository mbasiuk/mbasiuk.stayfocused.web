var mb = {};

if (window.location.protocol === 'https') {
    mb.uri = 'wss://207.191.157.79';
} else {
    mb.uri = 'ws://207.191.157.79';
}

mb.ws = new WebSocket(mb.uri);
mb.onerror = function (ev) {
    console.error(ev);
};

var performance = document.performance;

mb.onopen = function (ev) {
    var collected = JSON.stringify(performance);
    console.log('open', ev, performance, collected);
    websocket.send(collected);
};

mb.onclose = function (ev) {
    console.log('close', ev);
};

mb.onmessage = function (ev) {
    console.log('message', ev)
};

if(window.mbx) {
    mb = Object.assign(mb, mbx);
}

mb.ws.addEventListener('error', mb.onerror);

mb.ws.addEventListener('open', mb.onopen);

mb.ws.addEventListener('close', mb.onclose);

mb.ws.addEventListener('message', mb.onmessage);