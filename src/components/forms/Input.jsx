

const Input = (props) => {
    return (
        <div className='an-form-input-group'>
            <img src={props.icon} alt="icon"/>
            <input type={props.type} className='an-form-input' placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;