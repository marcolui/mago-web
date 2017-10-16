import {connect} from 'react-redux';
import React from 'react'

import AppBar from "../components/app-bar";
import SideMenu from "../components/side-menu";
import {loadItems, loadItemById} from '../actions/items-actions';

class AppMain extends React.Component {
    componentDidMount() {
        // this.props.loadItems();
    }
    render() {
        const {items, title, selectedItem, onItemsClicked, onItemClicked} = this.props;
        const selectedItemDiv = selectedItem && <div className="content">
                You selected {selectedItem.id} {selectedItem.name}
            </div>;
        return (
            <div className="app-layout">
                <AppBar appTitle={title}/>
                <SideMenu items={items} onItemsClicked={onItemsClicked} onItemClicked={onItemClicked}/>
                {selectedItemDiv}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items.items,
    selectedItem: state.items.selected,
    title: 'Mago Web'
});
const mapDispatchToProps = (dispatch) => ({
    onItemsClicked: () => dispatch(loadItems.action()),
    onItemClicked: (itemId) => dispatch(loadItemById.action(itemId))
});
export default connect(mapStateToProps, mapDispatchToProps)(AppMain);