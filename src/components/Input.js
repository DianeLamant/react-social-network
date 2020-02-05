import React from 'react';
import {InputText} from 'primereact/inputtext';

function Input(props) {

    const { type, value, handleChange } = props;
    
    return <div className="p-col-12 p-md-4">
        <div className="p-inputgroup">
            <span className="p-float-label">
                <InputText 
                    id="float-input" 
                    type={type}
                    onChange={(e) => handleChange(value, e.target.value)} 
                />
                <label htmlFor="float-input">{value}</label>
            </span>
        </div>
    </div>
    
    
    
}

export default Input;