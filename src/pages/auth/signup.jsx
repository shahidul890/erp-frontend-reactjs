import { Col, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BoxInput from "../../components/forms/BoxInput";
import boyImage from '../../img/boy.png';
import girlImage from '../../img/girl.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

// import Http from "../../config/Http.js";
import { useState } from "react";
import Http from "../../config/Http";


export default function Signup()
{
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [errorResponse, setErrorResponse] = useState(false);
    const history = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        const http = Http();
        const data = {firstName:firstName, lastName:lastName, email:email, phone:phone, password:password};

        try{
            const response = await http.post('/signup', data);

            if(response.data.status_code === 200)
            {
                e.target.reset();
                history('/dashboard');
            }
            else
            {
                setErrorResponse(response.data);
            }

            // console.log(response.data);

        }catch(error){

            setErrorResponse(error.response.data);
            // console.log(error.response.data);
        }
    }


    return <>
        <div className="container-fluid">
            <div className="row justify-content-between">
                
                <div className="col-5 d-none d-lg-block min-vh-100 align-items-center"
                    style={{
                        background: "linear-gradient(203.23deg, #5F01AB -23.63%, #8F04A2 114.92%)",
                        fontWeight:"bolder"
                    }}
                >
                    <div className="row min-vh-100 align-items-center">
                        <div className="col">
                            <h2 className="text-light">Start your journey with us.</h2>
                            <h5 className="mb-5 text-light">We provide the best management solution for your business.</h5>

                            <div className="col">
                            
                            <Swiper
                                slidesPerView={1.2}
                                spaceBetween={20}
                                loop={true}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                // navigation={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, Navigation]}
                            >
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="card-body row">
                                            <Col xl={3} className="mb-3">
                                                <Image 
                                                    className='rounded-circle img-fluid'
                                                    src={boyImage}
                                                    alt="feedback"
                                                />
                                            </Col>

                                            <Col>
                                                <h5 className='m-0'><b>Alfred Novel</b></h5>
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

                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </Col>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card">
                                        <div className="card-body row">
                                            <Col xl={3} className="mb-3">
                                                <Image 
                                                    className='rounded-circle img-fluid'
                                                    src={girlImage}
                                                    alt="feedback"
                                                />
                                            </Col>

                                            <Col>
                                                <h5 className='m-0'><b>Afsana </b></h5>
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

                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </Col>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="col">
                    <div className="row min-vh-100 align-items-center justify-content-center">
                        <div className="col-8">
                            <div className="card border-0" style={{fontWeight:"bolder"}}>
                                <div className="card-header border-0" style={{color:"#000",backgroundColor:"white"}}>
                                    <h2>Hi! {JSON.parse(localStorage.getItem('company_name'))}</h2>
                                    <h4>We need some more information</h4>

                                    <h5>Already have an account <Link to={"/login"} style={{color:"purple"}}> <b>Login</b> </Link></h5>
                                </div>
                                {
                                    errorResponse
                                    ?
                                    <span className="alert alert-danger">{errorResponse.message}</span>
                                    :
                                    ""
                                }
                                <form onSubmit={submitForm}>
                                    <div className="card-body py-3">
                                        <div className="row">
                                            <div className="col-lg">
                                                <BoxInput  type="text" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
                                            </div>
                                            <div className="col-lg">
                                                <BoxInput  type="text" placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <BoxInput  type="email" placeholder="Email address" onChange={e=>setEmail(e.target.value)}/>
                                        </div>

                                        <div className="row">
                                            <BoxInput  type="text" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
                                        </div>

                                        <div className="row">
                                            <BoxInput  type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                                        </div>

                                        <div className="d-grid my-3">
                                            <button 
                                                className="btn"
                                                style={{
                                                    background: "purple",
                                                    color:"white"
                                                }}
                                                type="submit"
                                            >Sign up</button>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}