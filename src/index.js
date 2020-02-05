import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import App from './App';
import Login from './pages/Login';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const Routing = () => {

    const [ loggedIn, setLoggedIn ] = useState(false)

    useEffect(() => {
        const storage = localStorage.getItem('diane');
        
        setLoggedIn(storage);
        
    }, [])

    return <>
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' component={App} />
            </Switch>
            {loggedIn ?
                <Redirect to='/' /> 
                : 
                <Redirect to='/login' />
            }
        </Router>
            
    </>
}

ReactDOM.render(<Routing />, document.getElementById('root'))