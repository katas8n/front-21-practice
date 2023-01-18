import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));

const group = [{ name: 'Maxon' }, { name: 'John' }, { name: 'Ihor' }];

root.render(
    <React.StrictMode>
        {/* props */}
        <App group={group} />
    </React.StrictMode>
);
