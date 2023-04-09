import React, { useState } from 'react';

// getting UI Components
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModule from '../UI/ErrorModule';

// get the styles.
import classes from './AddUsers.module.css';

const AddUsers = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState(null);
    const [error, setError] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        if(!userName || !userAge) {
            setError(true);
        } else {
            setError(false);
            props.addUsersHandle(userName, userAge);
        }
    }
    const errorHandler = () => {
        console.log('this is running');
        setError(false);
    }
    const nameChange = (event) => {
        setUserName(event.target.value);
    }

    const ageChange = (event) => {
        setUserAge(event.target.value);
    }

    return ( 
        <React.Fragment>
            {error && 
            <ErrorModule 
            title="Oops, wrong input"
            message="Please enter valid Username and Age :)"
            onConfirm={errorHandler}
            />}
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
        </React.Fragment>
    );
}

export default AddUsers;