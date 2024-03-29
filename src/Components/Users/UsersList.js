import React from 'react';

// get the UI components
import Card from '../UI/Card';

// get the styls
import styles from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
            {props.allUsers.map((user) => {
                return <li key ={user.id}>Hello {user.name}! You are {user.age} years old.</li>;
            })}
            </ul>
        </Card>
    );
}

export default UsersList;