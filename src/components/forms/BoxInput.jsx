

const BoxInput = (props) => {
    return (
        <div className="mb-3">
            <input 
                type={props.type} 
                className="form-control" 
                placeholder={props.placeholder}
                style={{
                    border:"1px solid purple"
                }}
                onChange={props.onChange}
            />
        </div>
    )
}

export default BoxInput;