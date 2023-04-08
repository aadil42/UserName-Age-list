import React, { useState } from 'react';

// getting UI Components
import Card from '../UI/Card';
import Button from '../UI/Button';

// get the styles.
import classes from './AddUsers.module.css';

const AddUsers = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState(null);


    const submitHandler = (event) => {
        event.preventDefault();
        props.addUsersHandle(userName, userAge);
    }

    const nameChange = (event) => {
        setUserName(event.target.value);
    }

    const ageChange = (event) => {
        setUserAge(event.target.value);
    }

    return (
        <Card className={`${classes.input}`}>
            <form onSubmit={submitHandler}>

            <label htmlFor="username">Username</label>
            <input
            id="username"
            type="text"
            onChange={nameChange}
            />
            
            <label htmlFor="age">Age (Years)</label>
            <input
            id="age"
            type="number"
            onChange={ageChange}
            />

            <Button type="submit">
                Add User
            </Button>
            </form>
        </Card>
    );
}

export default AddUsers;