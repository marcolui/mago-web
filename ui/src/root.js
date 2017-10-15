import React from 'react';
import ReactDOM from 'react-dom';

function createRoot() {
    return (
        <div>hello</div>
    )
}

export default {
    renderRoot: (container) => {
        ReactDOM.render(createRoot(), container);
    }
}