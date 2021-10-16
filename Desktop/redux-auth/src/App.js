import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import News from "./pages/news";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./PrivateRoute";

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    useEffect( () => {
        setIsAuth(JSON.parse(localStorage.getItem("isAuth")))
    }, [])
    return (
        <Router>
          <Header/>
            <Route exact path="/" component={Dashboard}/>
            <PrivateRoute    path="/news" component={News} isAuth={true}/>
            <Route  path="/login" component={Login}/>

        </Router>
    );
};

export default App;