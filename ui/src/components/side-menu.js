import React from 'react';

class SideMenu extends React.Component {
    render() {
        const {items} = this.props;
        const menuItems = items.map(item => (
            <div key={item.id}>{item.name}</div>
        ));
        return (
            <div className="side-menu">
                {menuItems}
            </div>
        )
    }
}

export default SideMenu;