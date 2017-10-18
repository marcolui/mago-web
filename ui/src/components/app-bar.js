import React from 'react';

class AppBar extends React.Component {
    render() {
        const {appTitle, menuItems} = this.props;
        const menuDiv = menuItems && (<div className="menu">
                {menuItems.map(menuItem => (<div>{menuItem.text}</div>))}
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