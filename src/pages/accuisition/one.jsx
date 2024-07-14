import { Col, Container, Row } from "react-bootstrap";
import BusinessTypeCard from "../../components/cards/BusinessTypeCard";
import factoryBG from "../../img/factory-bg.svg";
import schoolBG from "../../img/school-bg.svg";
import shopBG from "../../img/shop-card.svg";
import resturantBG from "../../img/resturant-bg.svg";
import travelBG from "../../img/travel-agency.svg";
import insuranceBG from "../../img/insurance-bg.svg";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function AccuisitionOne()
{
    return <>
        <Header />

            <Container>
                <Row className="align-items-center justify-content-center py-5 mt-5">
                    <Col xl={8} className="text-center mb-5">
                        <h2> <b>What kind of business do you run?</b> </h2>
                    </Col>

                    <Col xl={12}></Col>

                    <BusinessTypeCard icon={factoryBG} category="1"/>
                    <BusinessTypeCard icon={schoolBG} category="2"/>
                    <BusinessTypeCard icon={shopBG} category="3"/>
                    <Col xl={12}></Col>
                    <BusinessTypeCard icon={resturantBG} category="4"/>
                    <BusinessTypeCard icon={travelBG} category="5"/>
                    <BusinessTypeCard icon={insuranceBG} category="6"/>
                </Row>
            </Container>

        <Footer />
    </>
}


export default AccuisitionOne;