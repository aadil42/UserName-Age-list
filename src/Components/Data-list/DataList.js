
import SingleData from "./SingleData";

import {v4 as  uuidv4} from 'uuid';

const DataList = (props) => {

    const data = props.data;
    return (
        <div>
            {data.map((singleData) => {
             return <SingleData key={uuidv4()} user={singleData.name} age={singleData.age} />
            })}    
        </div>
    );
}

export default DataList;