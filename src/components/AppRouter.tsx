import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router/index.ts';
import { Routes } from "../router/index.ts";

const AppRouter = () => {
    const auth = false;
    return (
         auth ?
        <Switch>
            {privateRoutes.map(route => 
                <Route path={route.path} 
                       exact={route.exact} 
                       component={route.component}
                       key={route.path}
                />
            )}
             <Redirect to={Routes.AUTH}/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route => 
                <Route path={route.path} 
                       exact={route.exact} 
                       component={route.component}
                       key={route.path}
                />
            )}
            <Redirect to={Routes.REGISTER}/>
        </Switch>
    );
};

export default AppRouter;