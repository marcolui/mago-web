import {connect} from 'react-redux';
import React from 'react'

import AppBar from "../components/app-bar";
import SideMenu from "../components/side-menu";
import {loadItems} from '../actions/items-actions';

class AppMain extends React.Component {
    componentDidMount() {
        this.props.loadItems();
    }
    render() {
        const {menuItems} = this.props;
        return (
            <div className="app-layout">
                <AppBar appTitle="Mago Web"/>
                <SideMenu items={menuItems}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    menuItems: state.items.items
});
const mapDispatchToProps = (dispatch) => ({
    loadItems: () => dispatch(loadItems.action())
});
export default connect(mapStateToProps, mapDispatchToProps)(AppMain);