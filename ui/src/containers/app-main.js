import {connect} from 'react-redux';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {createRoutes, createLinks} from '../routes';

import AppBar from "../components/app-bar";

class AppMain extends React.Component {
    render() {
        const {title, links} = this.props;
        const routes = createRoutes();
        return (
            <Router>
                <div className="app-layout">
                    <AppBar appTitle={title} links={links}/>
                    {routes}
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    title: 'Mago Web',
    links: createLinks()
});
export default connect(mapStateToProps)(AppMain);