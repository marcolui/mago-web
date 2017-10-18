import {connect} from 'react-redux';
import React from 'react'

import AppBar from "../components/app-bar";
import ItemsMain from './items-main';
import PeopleMain from './people-main';

class AppMain extends React.Component {
    render() {
        const {title, menuItems} = this.props;
        return (
            <div className="app-layout">
                <AppBar appTitle={title} menuItems={menuItems}/>
                <ItemsMain/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    title: 'Mago Web',
    menuItems: [
        {text: 'Items'},
        {text: 'People'}
    ]
});
export default connect(mapStateToProps)(AppMain);