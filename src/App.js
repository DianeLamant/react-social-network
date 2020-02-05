import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, useHistory, Link } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Profil from './pages/Profil';
import SpecificUser from './pages/SpecificUser';

import dataUsers from './api/Users.json';
import dataArticles from './api/Articles.json';

const userNumber = Math.floor(Math.random() * Math.floor(dataUsers.length -10));

function App(props) {

    const [ articles, setArticles ] = useState([]);
    const [ articlesNumber, setArticlesNumber ] = useState(0);
    const [ people, setPeople ] = useState({});

    useEffect((start = articlesNumber, end = articlesNumber+10) => {
        if(articlesNumber >= dataArticles.length-9) return console.log('end')
        // setTimeout(() => {
            const tab = dataArticles.slice(start,end);
            setArticles(tab);
            
        // }, 300);
    }, [])

    useEffect((start = userNumber, end = userNumber+10) => {
        // setTimeout(() => {
            const tab = dataUsers.slice(start,end);
            setPeople(tab);
            
        // }, 300);
    }, [])

    return <>
        <Header />
        <div className="content-section implementation flexgrid-demo">
            <div className="p-grid">
                <Switch>
                    
                    <Route exact path='/'>
                        <Home {...props} articles={articles} people={people}/>
                    </Route>

                    <Route path='/profil'>
                        <Profil {...props} />
                    </Route>

                    <Route path='/user'>
                        <SpecificUser {...props} />
                    </Route>

                </Switch>
            </div>
        </div>
    </>
}

export default App;