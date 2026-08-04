import { Card, Col, Container, ListGroup, Row, Form, Button } from "react-bootstrap"
import logo from "../assets/logo.png"

export const Footer = () => {
    const size = 2;
    return (
        <Container fluid="sm" className="p-5">
            <Row className="justify-content-center align-items-start gap-5">
                <Col xs={2}>
                    <Card className="border-0 d-flex flex-column justify-content-center align-items-center">
                        <Card.Img variant="top" src={logo} className="w-100" />
                        <Card.Body>
                            <Card.Text>
                                Providing actionable environmental protection solutions through science and community
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={size}>
                    <ListGroup className="border-0">
                        <ListGroup.Item className="footer-title">
                            Organization
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            Contact Us
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            Careers
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={size}>
                    <ListGroup>
                        <ListGroup.Item className="footer-title">Legal</ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            Privacy Policy
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            Legal Notice
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={4}>
                    <ListGroup>
                        <ListGroup.Item className="footer-title">Newsletter</ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <Form className="d-flex gap-2">
                                <Form.Control type="email" placeholder="email adress" />
                                <Button variant="primary" type="submit">go</Button>
                            </Form>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}