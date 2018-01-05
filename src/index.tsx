import './style.css';

import { observable } from 'dob';
import { Connect } from 'dob-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HotCompent } from './HotCompent';


@observable
class Store
{
    subList: SubStore[] = []
}

@observable
class SubStore
{
    name: string = "xxx"

    create(): string
    {
        this.name = "111";
        return "ccxx"
    }
}

@Connect
class App extends React.Component<{ store: Store }, any> {
    render()
    {
        return (
            <div>
                <button value="" onClick={() =>
                {
                    let ss = new SubStore();
                    ss.create();
                    this.props.store.subList.push(ss);
                }} />
                {
                    this.props.store.subList.map((o, index) =>
                    {
                        return <span key={index}>{o.name}}</span>
                    })
                }
            </div>
        )
    }
}
let store = new Store();
store.subList.push(new SubStore());


let el = document.createElement("div");
document.body.appendChild(el);

const render = Component =>
{
    ReactDOM.render(
        <App store={store} />
        , el
    )
}


render(HotCompent);

if (module.hot)
{
    module.hot.accept('./HotCompent.tsx', async () =>
    {
        render((await import("./HotCompent")).HotCompent)
    })
}