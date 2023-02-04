import React, { useState } from 'react';

// imports 
import Form from './Components/Form/Form';
import DataList from './Components/Data-list/DataList';

function App() {

  const [data, setData] = useState([]);
  const addToList = (user, age) => {
    setData((data) => {
      return [
        ...data,
        {
          name: user,
          age: age
        }
      ];
    });
  }

  return (
    <div>
        <Form appendTolist={addToList} />
        <DataList data={data} />
    </div>
  );
}

export default App;
