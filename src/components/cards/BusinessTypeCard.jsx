import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const BusinessTypeCard = (props) => {

    return (
        <Col xl={3}>
            <Link to="/step-2" >
                <Card
                    className="p-0 border-0 mb-5"
                    style={{
                        boxShadow: "var(--boxShadow)",
                        backgroundImage: `url(${props.icon})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: "220px",
                        width: "220px",
                        borderRadius: "10px",
                        cursor:"pointer"
                    }}
                >
                <input type="hidden" value={props.category}/>
                </Card>
            </Link>
        </Col>
    )
}

export default BusinessTypeCard;