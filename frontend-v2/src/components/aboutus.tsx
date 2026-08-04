import { Col, Row, Image, Container } from "react-bootstrap";
import aboutus from "../assets/aboutus.jpg";

export const Aboutus = () => {
    return (
        <Container fluid="md">
            <Row className="gap-5">
                <Col>
                    <Image src={aboutus} thumbnail className="w-75" />
                </Col>
                <Col className="d-flex flex-column justify-content-center gap-3">
                    <span className="section-title-1">ABOUT US</span>
                    <h2>Building a Sustainable Tomorrow</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}