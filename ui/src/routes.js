import React from 'react';
import {Route, Link} from 'react-router-dom';

import ItemsMain from './containers/items-main';
import PeopleMain from './containers/people-main';

const routeConfig = [
    {text: 'Items', link: '/items', component: ItemsMain, isDefault: true},
    {text: 'People', link: '/people', component: PeopleMain}
];

export const createLinks = () => routeConfig.map(r => <Link to={r.link}>{r.text}</Link>);

export const createRoutes = () => {
    return routeConfig.reduce((routes, route) => {
        if (route.isDefault) {
            routes.push(<Route exact path="/" component={route.component}/>)
        }
        routes.push(<Route path={route.link} component={route.component}/>);
        return routes;
    },[])
};