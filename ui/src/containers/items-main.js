import React from 'react';
import {connect} from 'react-redux';

import SideMenu from "../components/side-menu";
import {loadItems, loadItemById} from '../actions/items-actions';


class ItemsMain extends React.Component {
    render() {
        const {items, selectedItem, onItemsClicked, onItemClicked} = this.props;
        const selectedItemDiv = selectedItem && <div className="item-details">
                You selected {selectedItem.id} {selectedItem.name}
            </div>;
        return (
            <div className="items-main">
                <SideMenu items={items} onItemsClicked={onItemsClicked} onItemClicked={onItemClicked}/>
                {selectedItemDiv}
            </div>
        );
    }
}

export default connect((state) => ({
        items: state.items.items,
        selectedItem: state.items.selected
    }),
    (dispatch) => ({
        onItemsClicked: () => dispatch(loadItems.action()),
        onItemClicked: (itemId) => dispatch(loadItemById.action(itemId))
    })
)(ItemsMain);