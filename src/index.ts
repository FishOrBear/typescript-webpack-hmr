
import "./style.css";
import Worker = require("worker-loader!./worker");


let worker = new Worker();

worker.postMessage('1111')

worker.addEventListener('message', (event) => { console.log(event.data); });
window["w"] = worker;