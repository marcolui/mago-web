import React from 'react';

class AppBar extends React.Component {
    render() {
        const {appTitle, links} = this.props;
        const menuDiv = links && (<div className="menu">
                {links.map(link => (<div>{link}</div>))}
            </div> );
        return (
            <div className="app-bar">
                <div className="title">{appTitle}</div>
                {menuDiv}
            </div>
        )
    }
}
export default AppBar;