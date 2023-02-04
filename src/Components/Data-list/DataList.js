
import SingleData from "./SingleData";

const DataList = (props) => {

    const data = props.data;
    return (
        <div>
            {data.map((singleData) => {
             return <SingleData user={singleData.name} age={singleData.age} />
            })}    
        </div>
    );
}

export default DataList;