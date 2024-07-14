import { Button } from "react-bootstrap";


const WhiteButton = (btn) => {
    return (
        <Button 
            variant='light'
            className='px-5 py-2 mt-3 mx-3'
            style={{
                // borderRadius: "0px 40px 40px 0px", 
                color: "rgba(102, 1, 169, 1)"
            }}
        >
            <b>{btn.text}</b>
        </Button>
    )
}

export default WhiteButton;