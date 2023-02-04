
import './Form.css';

const Form = () => {

    return (
        <div>
            <form>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
            />
            <label htmlFor="age">Age (Years)</label>
            <input
                id="age"
                type="number"
            />
            <button type="submit"> submit </button>
            </form>
        </div>
    );

};

export default Form;