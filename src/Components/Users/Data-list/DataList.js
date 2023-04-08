
import SingleData from "./SingleData";

import {v4 as  uuidv4} from 'uuid';
import "./DataList.css";
const DataList = (props) => {

    const data = props.data;
    return (
        <div  className="data-list-container">
            {data.map((singleData) => {
             return <SingleData key={uuidv4()} user={singleData.name} age={singleData.age} />
            })}    
        </div>
    );
}

export default DataList;