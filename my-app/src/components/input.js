import React, {useState} from 'react';
function Input() {
    const [values,setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    const handleFirstNameInputChange = (event) => {
        
    }
    return (
        <div className="form-container">
            <form className='register-form'>
                <input
                value={values.firstName}
                className="form-field"
                placeholder='First Name'
                name="firstName">
                </input>
                <input
                value={values.lastName}
                className="form-field"
                placeholder='Last Name'
                name="lastName">
                </input>
                <input
                value={values.email}
                className="form-field"
                placeholder='Email'
                name="email">
                </input>
                hjhjfghfgh
            </form>
        </div>
    );
}
export default Input;
    