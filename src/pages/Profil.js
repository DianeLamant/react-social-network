import React from 'react';
import Button from '../components/Button';

function Profil(props) {

    function Logout() {
        localStorage.removeItem('diane');
    }

    return <div>
        <h1>Profil</h1>
        <Button value='Logout' color='red' handleClick={Logout} /> 
    </div>
}

export default Profil;