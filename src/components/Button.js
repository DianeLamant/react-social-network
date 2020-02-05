import React from 'react';
import {Button} from 'primereact/button';

function Input(props) {

    const { value, color, handleClick } = props;

    
return <div className="p-col-12 p-md-4">
    <div className="p-inputgroup">
        <Button 
            className={'p-button-' + color}
            onClick={handleClick}
            label={value}
        />
    </div>
</div>
}

export default Input;