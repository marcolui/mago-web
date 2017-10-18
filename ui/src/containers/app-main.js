import {connect} from 'react-redux';
import React from 'react'

import AppBar from "../components/app-bar";
import ItemsMain from './items-main';

class AppMain extends React.Component {
    componentDidMount() {
        // this.props.loadItems();
    }
    render() {
        const {title} = this.props;
        return (
            <div className="app-layout">
                <AppBar appTitle={title}/>
                <ItemsMain/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    title: 'Mago Web'
});
export default connect(mapStateToProps)(AppMain);