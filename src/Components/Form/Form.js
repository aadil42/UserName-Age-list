import { useState } from "react";

import './Form.css';

const Form = (props) => {

    const [user, setUser] = useState("");
    const [age, setAge] = useState("");

    const addUser = (e) => {
        e.preventDefault(); // will  not load the page when form is submitted.
        if(validateData(user, age)) {
            props.appendTolist(user,age);
            // add user
        } else {
            props.setIsValid(false);
            // alert('invalid input');
            // invalid input // show error
        }
    }

    const updateUser = (event) => {
        setUser(event.target.value);
    }
    const updateAge = (event) => {
        setAge(event.target.value);        
    }
    const validateData = (user, age) => {
        const isValid = user.trim() && age.trim() && true;
        return isValid;   
    }

    return (
        <div>
            <form onSubmit={addUser}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={user}
                onChange={updateUser}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
                id="age"
                type="number"
                value={age}
                onChange={updateAge}
            />
            <button type="submit"> submit </button>
            </form>
        </div>
    );
};

export default Form;