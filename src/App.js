import React, { useState } from 'react';
// notes
// comonent one (form input)
// 	username field(text)
// 	age field(number)
// 	button 
// 		functionalities			
// 			if any of the field is empty show the error.
// 			add user when clicking add button or entering 

// -----------------------------------------------done-------------------------------------------

// component two (list of  data)
// 	sub container which holds the individual data
// 		functionalities
// 			no functionalities.

// -----------------------------------------------done--------------------------------------------

// component three (error component)
// 	This will display hard coded error 
// 		functionalities
// 			it will have button "okay" when clicking on it it will hide the error component 
// 			clicking anywhere except the error component will also hide the component 




// add styling.


	
	
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
  const hideError = () => {
    setIsValid(false);
  }
  return (
    <div onClick={hideError}>
        <Form setIsValid={setIsValid} appendTolist={addToList} />
        <DataList data={data} />
        {!isValid && <InvalidError setIsValid={setIsValid} />}
    </div>
  );
}

export default App;
