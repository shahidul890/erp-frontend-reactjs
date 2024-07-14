import { Card, Col, Container, Row } from "react-bootstrap";
import WhiteButton from "../components/forms/WhiteButton";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import BlogOne from "../img/blogs/1.png";
import BlogTwo from "../img/blogs/2.png";
import BlogThree from "../img/blogs/3.png";
import BlogFour from "../img/blogs/4.png";


function Blog()
{
    return <>
        <Header />

            <div 
                style={{
                    background: "linear-gradient(102.64deg, #5F01AB -3.82%, #8802A0 104.37%)",
                    minHeight:"70vh"
                }}
            >

                <Container>
                    <Row className="justify-content-center" 
                        style={{
                            padding:"150px 0"
                        }}
                    >
                        <Col xl={8} className="text-center text-light">
                            <h1> <b>How to run a business more easier</b> </h1>
                            <h6 className="mb-5">In this article we are going to talk about how to run a business more easier.</h6>

                            <WhiteButton text="Explore"/>
                        </Col>
                    </Row>
                </Container>

            </div>

            <Container>
                <Row className="justify-content-around py-5 my-5 align-items-center">
                    <Col xl={3}>
                        <Card className="border-0"
                            style={{
                                boxShadow: "0px 15px 22px rgba(0, 0, 0, 0.73)",
                                borderRadius:"20px"
                            }}
                        >
                            <Card.Img variant="top" src={BlogTwo} style={{borderRadius:"20px 20px 0 0"}}/>
                            <Card.Body>
                                <Card.Title>Lorem Ipsum</Card.Title>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3}>
                        <Card className="border-0"
                            style={{
                                boxShadow: "0px 15px 22px rgba(0, 0, 0, 0.73)",
                                borderRadius:"20px"
                            }}
                        >
                            <Card.Img variant="top" src={BlogTwo} style={{borderRadius:"20px 20px 0 0"}}/>
                            <Card.Body>
                                <Card.Title>Lorem Ipsum</Card.Title>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3}>
                        <Card className="border-0"
                            style={{
                                boxShadow: "0px 15px 22px rgba(0, 0, 0, 0.73)",
                                borderRadius:"20px"
                            }}
                        >
                            <Card.Img variant="top" src={BlogTwo} style={{borderRadius:"20px 20px 0 0"}}/>
                            <Card.Body>
                                <Card.Title>Lorem Ipsum</Card.Title>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3}>
                        <Card className="border-0"
                            style={{
                                boxShadow: "0px 15px 22px rgba(0, 0, 0, 0.73)",
                                borderRadius:"20px"
                            }}
                        >
                            <Card.Img variant="top" src={BlogTwo} style={{borderRadius:"20px 20px 0 0"}}/>
                            <Card.Body>
                                <Card.Title>Lorem Ipsum</Card.Title>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



                <Row className="justify-content-around my-5 py-5 align-items-center">
                    <Col xl={4}>
                        <img src={BlogOne} alt="blog image" className="img-fluid" style={{boxShadow: "0px 15px 22px rgba(0, 0, 0, 0.73)"}}/>
                    </Col>

                    <Col xl={5}>
                        <h1>Lorem Ipsum</h1>

                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </h5>
                    </Col>
                </Row>


                <Row className="justify-content-around my-5 py-5 align-items-center">
                    <Col xl={5}>
                        <h1>Lorem Ipsum</h1>

                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </h5>
                    </Col>

                    <Col xl={4}>
                        <img src={BlogOne} alt="blog image four" className="img-fluid" style={{boxShadow: "0px 15px 22px rgba(0, 0, 0, 0.73)"}}/>
                    </Col>
                </Row>
            </Container>

        <Footer/>
    </>
}

export default Blog;