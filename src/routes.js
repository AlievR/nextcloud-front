
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


import SystemList from './Page/SystemList'
import SystemInfo from './Page/SystemInfo'
import AuthPage from './Components/Auth/AuthPage'



export const useRoutes = isAuthenticated => {
        return (
            <Switch>
                <Route
                    path="/"
                    exact
                    component={SystemList} />
                <Route
                    path="/system/:id"
                    component={SystemInfo} />
                <Redirect to = "/" />
            </Switch>
        )
}
