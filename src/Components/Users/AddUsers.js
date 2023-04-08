import React from 'react';

// getting UI Components
import Card from '../UI/Card';
import Button from '../UI/Button';

// get the styles.
import classes from './AddUsers.module.css';

const AddUsers = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submitting');
    }

    return (
        <Card className={`${classes.input}`}>
            <form onSubmit={submitHandler}>

            <label htmlFor="username">Username</label>
            <input
            id="username"
            type="text"
            />
            
            <label htmlFor="age">Age (Years)</label>
            <input
            id="age"
            type="number"
            />

            <Button type="submit">
                Add User
            </Button>
            </form>
        </Card>
    );
}

export default AddUsers;