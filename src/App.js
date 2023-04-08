import React, { useState } from 'react';
	

// getting components
import AddUsers from './Components/Users/AddUsers';

function App() {
  const addUsersHandle = (userName, userAge) => {
      console.log(userName, userAge);
  }
  
  return (
    <div>
      <AddUsers addUsersHandle={addUsersHandle} />
    </div>
  );
}

export default App;
