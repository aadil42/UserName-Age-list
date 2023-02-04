
import './Form.css';

const Form = () => {

    const addUser = (e) => {
        e.preventDefault(); // will  not load the page when form is submitted.
        if(validateData()) {
            // add user
        }
    }

    const validateData = (user, age) => {
        const isValid = user.trim() && age.trim() && true;
        return isValid;   
    }

    return (
        <div>
            <form onSubmit={addUser}>
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