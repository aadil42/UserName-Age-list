import React, { useState } from 'react';

// imports 
import Form from './Components/Form/Form';
import DataList from './Components/Data-list/DataList';
import InvalidError from './Components/Error-components/InvalidError';
function App() {

  const [data, setData] = useState([]);
  const [isValid, setIsValid] = useState(true);

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
        <Form setIsValid={setIsValid} appendTolist={addToList} />
        <DataList data={data} />
        {!isValid && <InvalidError setIsValid={setIsValid} />}
    </div>
  );
}

export default App;
