import React, { useState } from 'react';	

// getting components
import AddUsers from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';

function App() {

  const [allUsers, setAllUsers] =  useState([]);

  const addUsersHandle = (userName, userAge) => {
    setAllUsers((preUsers) => {
      // const randomId = Math.random() * 100
      return [...preUsers,
        {
          name: userName,
          age: userAge,
          id: Math.floor(Math.random() * 1000000)
        }
      ]
    });
      console.log(userName, userAge);
  }


  return (
    <div>
      <AddUsers addUsersHandle={addUsersHandle} />
      <UsersList allUsers={allUsers} />
    </div>
  );
}

export default App;
