import { Col, Container, Row, Card } from 'react-bootstrap';
import background from "../../img/login-bg.svg";
import "./login.css";
// import { FaGlobe, FaGoogle } from "react-icons/fa";
import userIcon from "../../img/user2.svg"
import lockIcon from "../../img/lock.svg"
import googleIcon from "../../img/google.svg"
import Input from '../../components/forms/Input';
import Checkbox from '../../components/forms/Checkbox';
import { Link } from 'react-router-dom';
// import httpConfig from "../../config/http";


export default function Login() {

    // const {http} = httpConfig();





    return <>
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Container>
                <Row
                    className='min-vh-100 align-items-center justify-content-center'
                >
                    <Col lg={6} className="px-5">
                        <Card style={{color:"#000"}}>
                            <Card.Header className='bg-white border-0'>
                                <h3> <b>Welcome Back!</b> </h3>
                                <h6>Please log in to access your account.</h6>
                                <h6>Dont have an account? <Link 
                                    to={"/signup"}
                                    style={{
                                        color: "purple"
                                    }}
                                > <b>Sign Up</b> </Link> 
                                </h6>
                                
                            </Card.Header>
                            <Card.Body className='pt-4'>
                                <div className='mb-3'>
                                    <Input type="email" icon={userIcon} placeholder="Enter your email"/>
                                </div>
                                <div className='mb-3'>
                                    <Input type="password" icon={lockIcon} placeholder="Enter your password"/>
                                </div>

                                <div className='mb-3'>
                                    <Checkbox type="checkbox" icon={lockIcon} />
                                </div>

                                <div className='d-grid justify-content-center mt-5'>
                                    <button 
                                        className='btn'
                                        style={{
                                            backgroundColor:"#7502A7",
                                            color: "white",
                                            fontWeight: "bolder",
                                            width: "20rem",
                                        }}
                                    >Log In</button>

                                    <div className='mt-3 text-center'>
                                        <h6>Or Login With</h6>
                                        <img src={googleIcon} alt="google" width={50}/>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}