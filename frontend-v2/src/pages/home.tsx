import { Col, Container, Row, Image, Button } from "react-bootstrap";
import forest from "../assets/header-forest.jpg";
import { Aboutus } from "../components/aboutus";
import { WhatWeDo } from "../components/whatwedo";
import { Vision } from "../components/vision";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";


export const Home = () => {
    const {t} = useTranslation();
    
    return (
        <>
            <Container fluid className=" p-4 mt-5 min-vh-100 d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <Container fluid="md" className="mt-5">
                            <Row className="gap-5">
                                <Col className="d-flex flex-column justify-content-center align-items-center">
                                    <h1>{t("home.banner.title")}</h1>
                                    <p>{t("home.banner.subtitle")}</p>
                                    <Container className="d-flex justify-content-center">
                                        <Button variant="primary" size="lg" className="m-4 text-light fw-bolder border-3">{t("home.banner.button-learn-more")}</Button>
                                        <Button variant="ligth" size="lg" className="m-4 border-primary border-3">{t("home.banner.button-take-action")}</Button>
                                    </Container>
                                </Col>
                                <Col>
                                    <Image src={forest} className="w-100" thumbnail />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-4 p-5 bg-light">
                <Aboutus />
            </Container>
            <Container fluid className="p-5">
                <WhatWeDo />
            </Container>
            <Container fluid className="p-4 bg-light">
                <Vision />
            </Container>
            <Container fluid>
                <Footer />
            </Container>
        </>
    )
}