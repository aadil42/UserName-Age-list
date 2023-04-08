
import './InvalidError.css';
const InvalidError = (props) => {
    const removeError = () => {
        props.setIsValid(true);
    }
    return (
        <div className="error-container">
            <h2 className="error-title">Invalid Input</h2> 
            <p className ="error-text">please enter valid input</p>
            <button className="error-button" onClick={removeError}>ok</button>
        </div>
    );
}

export default InvalidError;