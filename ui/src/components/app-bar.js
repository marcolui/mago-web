import React from 'react';

class AppBar extends React.Component {
    render() {
        const {appTitle} = this.props;
        return (
            <div className="app-bar">
                {appTitle}
            </div>
        )
    }
}
export default AppBar;