import { Col, Container, Row, Form} from "react-bootstrap";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { Link } from "react-router-dom";
import WhiteButton from "../../components/forms/WhiteButton";
import { useEffect, useState } from "react";

function AccuisitionThree()
{
    const [companyRange, setCompanyRange] = useState();


    useEffect(() => {
        localStorage.setItem("company_range", JSON.stringify(companyRange));
    })

    return <>
        <Header />

            <div style={{
                background: "linear-gradient(100.06deg, #5701AD -16.36%, #90039E 110.54%)",
                paddingTop: "40px"
            }}>
                <Container>
                    <Row className="align-items-center justify-content-center min-vh-100">
                        <Col xl={6} className="text-center">
                            <h2 className="text-light mb-5"> <b>How many employee do you have?</b> </h2>
                            
                            <input 
                                type="button" 
                                value="10-20" 
                                onClick={e=>setCompanyRange("10-20")}
                                className='px-5 py-2 mt-3 mx-3'
                                style={{
                                    color: "rgba(102, 1, 169, 1)",
                                    fontWeight:"bolder",
                                    borderRadius:"7px",
                                    border:"none"
                                }}
                            />

                            <input 
                                type="button" 
                                value="30-40" 
                                onClick={e=>setCompanyRange("30-40")}
                                className='px-5 py-2 mt-3 mx-3'
                                style={{
                                    color: "rgba(102, 1, 169, 1)",
                                    fontWeight:"bolder",
                                    borderRadius:"7px",
                                    border:"none"
                                }}
                            />

                            <input 
                                type="button" 
                                value="40-50" 
                                onClick={e=>setCompanyRange("40-50")}
                                className='px-5 py-2 mt-3 mx-3'
                                style={{
                                    color: "rgba(102, 1, 169, 1)",
                                    fontWeight:"bolder",
                                    borderRadius:"7px",
                                    border:"none"
                                }}
                            />
                            
                            <input 
                                type="button" 
                                value="50-60" 
                                onClick={e=>setCompanyRange("50-60")}
                                className='px-5 py-2 mt-3 mx-3'
                                style={{
                                    color: "rgba(102, 1, 169, 1)",
                                    fontWeight:"bolder",
                                    borderRadius:"7px",
                                    border:"none"
                                }}
                            />

                            <input 
                                type="button" 
                                value="60-100+" 
                                onClick={e=>setCompanyRange("60-100+")}
                                className='px-5 py-2 mt-3 mx-3'
                                style={{
                                    color: "rgba(102, 1, 169, 1)",
                                    fontWeight:"bolder",
                                    borderRadius:"7px",
                                    border:"none"
                                }}
                            />
                            

                           <div className="mt-5">
                                 <Link to="/signup">
                                    <WhiteButton text="Next" />
                                </Link>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

        <Footer />
    </>
}


export default AccuisitionThree;