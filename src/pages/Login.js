import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function Login(props) {

    const validUser = {username: 'diane', password: 'diane'};
    const [ user, setUser ] = useState({});

    function handleChange(key, value) {
        setUser(prevState => ({
            ...prevState,
            [key] : value
        }))
    }

    function handleClick() {
        console.log(user);
        if(user.Username === validUser.username ||
            user.Password === validUser.password) {
                localStorage.setItem('diane', 'true');
                console.log('yes');
                
        }
    }

    return <div className="content-section implementation">
        <h3 className='first'>Sign in</h3>
        <div className="p-grid p-fluid">
            <Input type='text' value='Username' handleChange={handleChange} />
            <Input type='password' value='Password' handleChange={handleChange} />
        </div>
            <Button value='Sign in' color='success' handleClick={handleClick} />
    </div>
}

export default Login;