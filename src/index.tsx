import './style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader'
import { HotCompent } from './HotCompent';


let el = document.createElement("div");
document.body.appendChild(el);

const render = Component =>
{
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        el,
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