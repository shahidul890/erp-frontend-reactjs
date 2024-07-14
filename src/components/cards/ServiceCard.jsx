import { Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({icon, title}) => {
    return (
        <Card style={{boxShadow: "var(--boxShadow)", borderRadius: "20px"}}>
            <Card.Body className='py-4'>
                <img src={icon} alt='factory' className='img-fluid mb-4' width={90}/>
                <h3 className='mb-4'> <b>{title}</b> </h3>
                <button className='mb-3 p-2 border-0' style={{ borderRadius:"150px", background:"linear-gradient(129.31deg, #9C018C 7.09%, #79019F 93.9%)"}}>
                    <FaArrowRight style={{fontSize:"28px", color:"white"}}/>
                </button>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard;