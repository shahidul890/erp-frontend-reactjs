import { Col, Container, Row, Form} from "react-bootstrap";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { Link, useNavigate } from "react-router-dom";
import WhiteButton from "../../components/forms/WhiteButton";
import { useEffect, useState } from "react";

function AccuisitionTwo()
{   
    const [companyName, setCompanyName] = useState();
    const history = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        history("/step-3");
    }

    useEffect(() => {
        localStorage.setItem("company_name", JSON.stringify(companyName));
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
                            <h2 className="text-light mb-5"> <b>What is the name of your business?</b> </h2>
                            
                            
                            
                            <form onSubmit={submitForm}>
                                <input 
                                    className="mb-3 form-control"
                                    type="text"
                                    placeholder="EX: XYZ Limited"
                                    style={{
                                        padding:"16px",
                                        fontSize:"18px"
                                    }}
                                    onChange={e=>setCompanyName(e.target.value)}
                                    required
                                />

                                <button
                                    className='px-5 py-2 mt-3 mx-3 btn btn-light'
                                    style={{
                                        color: "rgba(102, 1, 169, 1)"
                                    }}
                                >
                                    <b>Next</b>
                                </button>
                            </form>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

        <Footer />
    </>
}


export default AccuisitionTwo;