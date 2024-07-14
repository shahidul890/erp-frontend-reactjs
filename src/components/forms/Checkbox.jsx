// import "./form.css";

const Input = (props) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="1" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Remember Me
            </label>
        </div>
    )
}

export default Input;