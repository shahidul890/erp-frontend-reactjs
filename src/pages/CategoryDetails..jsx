import { Row, Col, Container } from "react-bootstrap";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import DashboardImage from "../img/details/dashboard.svg";
import OneImage from "../img/details/one.svg";
import TwoImage from "../img/details/two.svg";
import "../styles/hero-image-animation.css";

function CategoryDetails()
{
    return <>
        <Header/>
            <Container style={{padding: "170px 0"}}>
                <Row className="justify-content-center align-items-center" style={{
                    fontWeight:"bolder"
                }}>
                    <Col xl={8} className="text-center">
                        <h1 className="mb-5"> <b>Manage your factory with ERP</b> </h1>
                        <h5>Hustling to manage your factory?dont worry we got your back. <br/> ERP gives you the best factory management solution.</h5>
                        <img src={DashboardImage} alt="dashboard" className="img-fluid hero-animate"/>
                    </Col>
                </Row>

                <Row className="justify-content-around align-items-center my-5 py-5">
                    <Col xl={4}>
                        <h1> <b>Manage your products you want</b> </h1>

                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </h6>
                    </Col>

                    <Col xl={5}>
                        <img src={OneImage} alt="2nd dashboard screen" className="img-fluid"/>
                    </Col>
                </Row>


                <Row className="justify-content-around align-items-center my-5 py-5">
                    <Col xl={5}>
                        <img src={TwoImage} alt="2nd dashboard screen" className="img-fluid"/>
                    </Col>

                    <Col xl={4}>
                        <h1> <b>Manage your Employee</b> </h1>

                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </h6>
                    </Col>
                </Row>


                <Row className="justify-content-center align-items-center py-5 my-5" 
                    style={{
                        fontWeight:"bolder"
                    }}
                >
                    <Col xl={8} className="text-center">
                        <h1 className="mb-5"> <b>ERP makes your factory business more smother</b> </h1>
                        <h5>No need to worry about to mange your your factory business we can understand what you want <br/> ERP gives you the best factory management solution.</h5>
                    </Col>
                </Row>
            </Container>
        <Footer/>
    </>
}

export default CategoryDetails;