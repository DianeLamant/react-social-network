import React from 'react';
import { useHistory, Link } from 'react-router-dom';


function Header(props) {

    const history = useHistory();
  
    return <>
        <div className="ui secondary pointing menu">
            <Link to='/' className={history.location.pathname === "/" ? 'item active' : 'item'}>
            Home
            </Link>
            
            <div className="right menu">
                <Link to="/profil" className={history.location.pathname === "/profil" ? "ui item active" : 'ui item'}>
                    Profil
                </Link>
            </div>
        </div>
        
    </>
}

export default Header;