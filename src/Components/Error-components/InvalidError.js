
import './InvalidError.css';
const InvalidError = (props) => {
    const removeError = () => {
        props.setIsValid(true);
    }
    return (
        <div>
            enter valid user and age.
            <button onClick={removeError}>ok</button>
        </div>
    );
}

export default InvalidError;