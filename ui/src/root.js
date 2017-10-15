import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './containers/app-main';
import {Provider} from 'react-redux';
import configureStore from './configure-store';

function createRoot() {
    const store = configureStore();
    return (
        <Provider store={store}>
        <AppMain/>
        </Provider>
    )
}

export default {
    renderRoot: (container) => {
        ReactDOM.render(createRoot(), container);
    }
}