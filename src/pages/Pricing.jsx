import Footer from "./layouts/footer";
import Header from "./layouts/header";
import CurveBg from "../img/vector-curve/12.svg";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

function Pricing()
{
    return <>
        <Header/>
            <div style={{
                    backgroundImage: `url(${CurveBg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight:"100vh"
                }}
            >
                <Container style={{
                    paddingTop:"170px",
                    paddingBottom:"95px",
                    marginBottom:"150px"
                }}>
                    <Row className="justify-content-center align-items-center">
                        <Col xl={8} className="text-light text-center">
                            <h1 className="mb-3"> <b>Simple pricing for everyone</b> </h1>
                            <h4>Pricing that scales with you</h4>
                        </Col>

                        <Col xl={12} className="mb-5"></Col>

                        <Col lg={3} className="mb-5 text-center">
                            <Card 
                                className='border-0'
                                style={{
                                   color: "#000",
                                    borderRadius:"20px",
                                    boxShadow: "0px 10px 25px #6701C5",
                                }}
                            >
                                <Card.Body className='px-0'>
                                    <div
                                        style={{
                                            padding:"24px 0",
                                            color: "purple"
                                        }}
                                    >
                                        <h2 className='m-0'> <b>TK 120</b>/<small>month</small></h2> 
                                    </div>
                                    <hr
                                        style={{
                                            color: "#fff",
                                            border: "2px solid purple"
                                        }}
                                    />

                                    <ul className='list-unstyled' style={{color: "purple"}}>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                    </ul>

                                    <div className="d-grid px-4 mt-5">
                                        <Button 
                                            variant="light" 
                                            size="sm" 
                                            style={{
                                                color:"white",
                                                background:"purple",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            <b>Select Plan</b>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} className="mb-5 text-center">
                            <Card 
                                className='border-0'
                                style={{
                                   color: "#000",
                                    borderRadius:"20px",
                                    boxShadow: "0px 10px 25px #6701C5",
                                }}
                            >
                                <Card.Body className='px-0'>
                                    <div
                                        style={{
                                            padding:"24px 0",
                                            color: "purple"
                                        }}
                                    >
                                        <h2 className='m-0'> <b>TK 120</b>/<small>month</small></h2> 
                                    </div>
                                    <hr
                                        style={{
                                            color: "#fff",
                                            border: "2px solid purple"
                                        }}
                                    />

                                    <ul className='list-unstyled' style={{color: "purple"}}>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                    </ul>

                                    <div className="d-grid px-4 mt-5">
                                        <Button 
                                            variant="light" 
                                            size="sm" 
                                            style={{
                                                color:"white",
                                                background:"purple",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            <b>Select Plan</b>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} className="mb-5 text-center">
                            <Card 
                                className='border-0'
                                style={{
                                   color: "#000",
                                    borderRadius:"20px",
                                    boxShadow: "0px 10px 25px #6701C5",
                                }}
                            >
                                <Card.Body className='px-0'>
                                    <div
                                        style={{
                                            padding:"24px 0",
                                            color: "purple"
                                        }}
                                    >
                                        <h2 className='m-0'> <b>TK 120</b>/<small>month</small></h2> 
                                    </div>
                                    <hr
                                        style={{
                                            color: "#fff",
                                            border: "2px solid purple"
                                        }}
                                    />

                                    <ul className='list-unstyled' style={{color: "purple"}}>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                        <li className='mb-2'>
                                            <FaCheckCircle/> Lorem Ipsum
                                        </li>
                                    </ul>

                                    <div className="d-grid px-4 mt-5">
                                        <Button 
                                            variant="light" 
                                            size="sm" 
                                            style={{
                                                color:"white",
                                                background:"purple",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            <b>Select Plan</b>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            </div>

        <Footer/>
    </>
}

export default Pricing;