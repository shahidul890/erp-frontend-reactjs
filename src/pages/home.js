import { Button, Col, Container, Image, Row, Card } from 'react-bootstrap';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import "react-multi-carousel/lib/styles.css";
import heroIMG from '../img/hero2.svg';
import "../styles/hero-image-animation.css";
import factoryIcon from '../img/factory.svg';
import schoolIcon from '../img/school.svg';
import insuranceIcon from '../img/insurance.svg';
import resturantIcon from '../img/resturant.svg';
import shopIcon from '../img/shop.svg';
import travelIcon from '../img/travel.svg';
import office from '../img/office.svg';
import user from '../img/user.svg';
import support from '../img/support.svg';
import officeManagement from '../img/office-management.svg';
import turjoDance from '../img/turjo-dance.svg';
import girlImage from '../img/girl.png';
import boyImage from '../img/boy.png';
import ServiceCard from '../components/cards/ServiceCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import { Link } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const testimonial = [
    {
        image: girlImage,
        name: "Alexa",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: boyImage,
        name: "William Shakespeare",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: girlImage,
        name: "Julian Norwich",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: boyImage,
        name: "Christopher Marlowe",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];


export default function Home()
{
    return <>

        <Header/>

        {/* ----------- Hero Section 
        ==================================================*/}
        <div 
            style={{ 
                background: "linear-gradient(to right, rgba(87, 1, 173, 1), rgba(144, 3, 158, 1))", 
                borderRadius: "0px 0 200px 0px"
            }}
            className="d-none d-md-block"
        >
            <Container>
                <Row className='justify-content-between align-items-center text-light'>
                <Col md={5}>
                    <h1>Want to extend your business? </h1>
                    <h5>ERP system will be a best choice for your business.</h5>

                    <Link to="/step-1">
                        <Button 
                            variant='light' 
                            className='px-4 py-2 mt-3'
                            style={{borderRadius: "0px 40px 40px 0px", color: "rgba(102, 1, 169, 1)"}}
                        >
                            <b>Get Started</b>

                            <FaArrowRight className='ms-2'/>
                        </Button>
                    </Link>
                </Col>

                <Col>
                    <Image 
                        src={heroIMG} 
                        alt="hero" 
                        className='img-fluid hero-animate' 
                        width={1600}
                    />
                </Col>
                </Row>
            </Container>
        </div>
        {/* //. Hero section */}

        {/* ------------    hero section for mobile 
        ==================================================*/}
        <div 
            style={{ 
                background: "linear-gradient(to right, rgba(87, 1, 173, 1), rgba(144, 3, 158, 1))", 
            }}
            className="d-block d-md-none"
        >
            <Container>
                <Row 
                    className='align-items-center text-light text-center' 
                    style={{padding: "100px 0 30px 0"}}
                >
                    <Col>
                        <h1 className='mb-3'> <b>Want to extend your business?</b> </h1>
                        <h5 className='mb-3'>ERP system will be a best choice for your business.</h5>

                        <Button 
                            as='a'
                            variant='light' 
                            className='px-4 py-2 mt-3'
                            style={{borderRadius: "40px 40px", color: "rgba(102, 1, 169, 1)"}}
                        >
                            <b>Get Started</b>

                            <FaArrowRight className='ms-2'/>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* //. hero section for mobile */}


        {/* -----------     ERP Type 
        ====================================================*/}
        <Container className='my-5'>
            <Row className='justify-content-center align-items-center'>
                <Col lg={10} className="text-center mb-5">
                    <h2>
                        <b>Chose your business type and start your journey</b>
                    </h2>
                </Col>

                <Col xs={12}></Col>

                <Col lg={3} className="text-center mb-5" style={{height: "300px", width: "266px"}}>
                    <Link to="/details"  className='text-decoration-none text-dark'>
                        <ServiceCard icon={factoryIcon} title="Facetory management" />
                    </Link>
                </Col>

                <Col lg={3} className="text-center mb-5" style={{height: "300px", width: "266px"}}>
                    <Link to="/details"  className='text-decoration-none text-dark'>
                        <ServiceCard icon={schoolIcon} title="School Management" />
                    </Link>
                </Col>

                <Col lg={3} className="text-center mb-5" style={{height: "300px", width: "266px"}}>
                    <Card style={{boxShadow: "0px 7px 20px #870198", borderRadius: "20px"}}>
                        <Card.Body className='py-4'>
                            <Image src={shopIcon} alt='factory' className='img-fluid mb-4' width={90}/>
                            <h3 className='mb-4'> <b>Shop Management</b> </h3>
                            <Button className='mb-3 p-2 border-0' style={{ borderRadius:"150px", background:"linear-gradient(129.31deg, #9C018C 7.09%, #79019F 93.9%)"}}>
                                <FaArrowRight style={{fontSize:"24px"}}/>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12}></Col>

                <Col lg={3} className="text-center mb-5" style={{height: "300px", width: "266px"}}>
                    <Card style={{boxShadow: "0px 7px 20px #870198", borderRadius: "20px"}}>
                        <Card.Body className='py-4'>
                            <Image src={insuranceIcon} alt='factory' className='img-fluid mb-4' width={90}/>
                            <h3 className='mb-4'> <b>Insurance Management</b> </h3>
                            <Button className='mb-3 p-2 border-0' style={{ borderRadius:"150px", background:"linear-gradient(129.31deg, #9C018C 7.09%, #79019F 93.9%)"}}>
                                <FaArrowRight style={{fontSize:"24px"}}/>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} className="text-center mb-5" style={{height: "300px", width: "266px"}}>
                    <Card style={{boxShadow: "0px 7px 20px #870198", borderRadius: "20px"}}>
                        <Card.Body className='py-4'>
                            <Image src={travelIcon} alt='factory' className='img-fluid mb-4' width={90}/>
                            <h3 className='mb-4'> <b>Travel Management</b> </h3>
                            <Button className='mb-3 p-2 border-0' style={{ borderRadius:"150px", background:"linear-gradient(129.31deg, #9C018C 7.09%, #79019F 93.9%)"}}>
                                <FaArrowRight style={{fontSize:"24px"}}/>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} className="text-center mb-5" style={{height: "300px", width: "266px"}}>
                    <Card style={{boxShadow: "0px 7px 20px #870198", borderRadius: "20px"}}>
                        <Card.Body className='py-4'>
                            <Image src={resturantIcon} alt='factory' className='img-fluid mb-4' width={90}/>
                            <h3 className='mb-4'> <b>Resturant Management</b> </h3>
                            <Button className='mb-3 p-2 border-0' style={{ borderRadius:"150px", background:"linear-gradient(129.31deg, #9C018C 7.09%, #79019F 93.9%)"}}>
                                <FaArrowRight style={{fontSize:"24px"}}/>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        {/* ERP Type */}


        {/* ---------  section Counter
        =================================================== */}
        <Container 
            style={{
                background: "linear-gradient(264.4deg, #6501A9 -8.9%, #9F06A5 112.51%)",
                borderRadius: "25px"
            }}
            className="my-3"
        >
            <Row className='p-5 text-light text-center justify-content-around align-items-center'>
                <Col lg={3} className="mb-3">
                    <h1> <Image src={user} className="img-fluid" style={{height:"90px"}}/> <b>100K+</b></h1>
                    <h5><b>Users</b></h5>
                </Col>

                <Col lg={3} className="mb-3">
                    <h1> <Image src={office} className="img-fluid" style={{height:"90px"}}/> <b>100K+</b></h1>
                    <h5><b>Industries</b></h5>
                </Col>

                <Col lg={3} className="mb-3">
                    <h1> <Image src={support} className="img-fluid" style={{height:"90px"}}/> <b>50+</b></h1>
                    <h5><b>Support Members</b></h5>
                </Col>
            </Row>
        </Container>


        {/* ----------  pricing
        =================================================== */}
        <Container className='my-5'>
            <Row className='py-5 text-center justify-content-around'>
                <Col xl={12} className="mb-5">
                    <h3><b>Choose your plans</b></h3>
                </Col>
                <Col lg={3} className="mb-5">
                    <Card 
                        className='border-0 text-light'
                        style={{
                            background: "linear-gradient(209.02deg, #8A01AC -16.69%, #6401C7 113.03%)"
                        }}
                    >
                        <Card.Body className='px-0'>
                            <div
                                style={{
                                    padding:"30px 0",
                                }}
                            >
                                <h2 className='m-0'> <b>TK 120</b>/<small>month</small></h2> 
                            </div>
                            <hr
                                style={{
                                    color: "#fff",
                                    border: "2px solid white"
                                }}
                            />

                            <ul className='list-unstyled'>
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
                                        color:"#7001BF",
                                        borderRadius: "8px"
                                    }}
                                >
                                    <b>Select Plan</b>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} className="mb-5">
                    <Card 
                        className='border-0 text-light'
                        style={{
                            background: "linear-gradient(209.02deg, #8A01AC -16.69%, #6401C7 113.03%)"
                        }}
                    >
                        <Card.Body className='px-0'>
                            <div
                                style={{
                                    padding:"30px 0",
                                }}
                            >
                                <h2 className='m-0'> <b>TK 120</b>/<small>month</small></h2> 
                            </div>
                            <hr
                                style={{
                                    color: "#fff",
                                    border: "2px solid white"
                                }}
                            />

                            <ul className='list-unstyled'>
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
                                        color:"#7001BF",
                                        borderRadius: "8px"
                                    }}
                                >
                                    <b>Select Plan</b>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} className="mb-5">
                    <Card 
                        className='border-0 text-light'
                        style={{
                            background: "linear-gradient(209.02deg, #8A01AC -16.69%, #6401C7 113.03%)"
                        }}
                    >
                        <Card.Body className='px-0'>
                            <div
                                style={{
                                    padding:"30px 0",
                                }}
                            >
                                <h2 className='m-0'> <b>TK 120</b>/<small>month</small></h2> 
                            </div>
                            <hr
                                style={{
                                    color: "#fff",
                                    border: "2px solid white"
                                }}
                            />

                            <ul className='list-unstyled'>
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
                                        color:"#7001BF",
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


        {/* ---------   what is ERP
        ===================================================== */}
        <div
            style={{
                background: "linear-gradient(235.27deg, #23006C 4.28%, #CD2BE8 95.87%)"
            }}
        >
            <Container className=''>
                <Row className='align-items-center justify-content-between text-light'>
                    <Col lg={4} className="py-5">
                        <h1 className='mb-5'>
                            <b>What Is ERP?</b>
                        </h1>

                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </h5>
                    </Col>

                    <Col lg={6} className="py-5">
                        <Image 
                            src={officeManagement} 
                            alt='office management' 
                            className='img-fluid img-animate-updown'
                        />
                    </Col>
                </Row>
            </Container>

        </div>



        {/* ---------   Why Choose us
        ===================================================== */}
        <div>
            <Container className=''>
                <Row className='align-items-center justify-content-between'>
                    <Col lg={6} className="py-5">
                        <div
                            className='text-center'
                            style={{
                                background: "linear-gradient(133.84deg, #B9006F -1.08%, #4D0A8B 95.56%)",
                                borderRadius: "300px 600px 300px",

                            }}
                        >
                            <Image 
                                src={turjoDance} 
                                alt='computer desk' 
                                className='img-fluid img-animate-updown'
                                width={400}
                            />
                        </div>
                    </Col>

                    <Col lg={5} className="py-5">
                        <h1 className='mb-5'>
                            <b>Why Choose Us?</b>
                        </h1>

                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </h5>
                    </Col>
                </Row>
            </Container>

        </div>


        {/* --------    Carousel Feedback
        ======================================================= */}
        <Container className='py-5'>
            <Row>
                <Col 
                    xl={12}
                    className="text-center"
                >
                    <h1><b>Client Feedback</b></h1>
                </Col>

                <Col xl={12} className="row">
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={110}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        style={{
                            padding: "120px 0"
                        }}
                    >
                    {testimonial.map((n, i) => {
                        return <>
                            <SwiperSlide key={i}>
                                <TestimonialCard id={i} name={n.name} image={n.image} review={n.review}/>
                            </SwiperSlide>
                        </>
                    })}
                    </Swiper>
                </Col>
            </Row>
        </Container>

        <Footer/>
    </>
}