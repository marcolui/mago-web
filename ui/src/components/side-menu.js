import React from 'react';

class SideMenu extends React.Component {
    render() {
        const {items, onItemsClicked, onItemClicked} = this.props;
        const itemDivs = items.map(item => (
            <div key={item.id} onClick={() => onItemClicked(item.id)}>{item.name}</div>
        ));
        return (
            <div className="side-menu">
                <div className="menu-item" onClick={onItemsClicked}><i className="fa fa-list-ul" aria-hidden="true"/>Items</div>
                <div className="sub-menu">
                    {itemDivs}
                </div>
            </div>
        )
    }
}

export default SideMenu;