import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({isAuth, component: Component, ...rest}) => {
    return (
            <Route {...rest}
            render={() => {
                if (isAuth){
                    return <Component />
                }else{
                    return  <Redirect to="/login" />
                }
            }}
            />
    );
};

export default PrivateRoute;