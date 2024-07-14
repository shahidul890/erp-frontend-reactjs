import { height } from "@mui/system";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const TestimonialCard = (client) =>{
    return <>
        {/* <Col key={client.id} xl={4} className="mb-4"> */}
            <Card
                className='border-0 w-100'
                style={{
                    boxShadow: "0px 11px 22px #650785"
                    // height:
                }}
            >
                <Card.Body>

                    <Row className='align-items-center mb-4'>
                        <Col xl={3} className="mb-3">
                            <img 
                                className='rounded-circle img-fluid'
                                src={client.image}
                                alt="feedback"
                            />
                        </Col>

                        <Col>
                            <h5 className='m-0'><b>{client.name}</b></h5>
                            <div
                                style={{
                                    color: "gold"
                                }}
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </Col>
                    </Row>

                    <p>{client.review}</p>
                </Card.Body>
            </Card>
        {/* </Col> */}
    </>
}

export default TestimonialCard;