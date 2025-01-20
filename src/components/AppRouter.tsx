import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router/index.ts';
import { observer } from 'mobx-react-lite';
import { Routes } from "../router/index.ts";
import { Store } from "../store/index.ts";

const AppRouter = observer(() => {
    const { regAuth } = Store.getInstance();
    return (
        regAuth ?
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
});

export default AppRouter;