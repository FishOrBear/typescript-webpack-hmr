
let btn = document.createElement("button");
btn.innerHTML = "click me"
document.body.appendChild(btn);

let oldClickEvent;
//update hot module
let RegEvent = async () =>
{
    if (oldClickEvent)
        btn.removeEventListener("click", oldClickEvent);
    let clickEvent = (await import("./print")).CliclEvent;
    btn.addEventListener("click", clickEvent);
    oldClickEvent = clickEvent;
}

RegEvent();

if (module.hot)
{
    module.hot.accept('./print', async function ()
    {
        RegEvent();
    })
}