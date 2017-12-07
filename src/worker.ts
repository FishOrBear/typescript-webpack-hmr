import { hello } from './print';
const ctx: Worker = self as any;

// Post data to parent thread
ctx.postMessage({ foo: "foo" });

// Respond to message from parent thread
ctx.addEventListener('message', (event: MessageEvent) =>
{
    hello();
    console.log(event.data);
});