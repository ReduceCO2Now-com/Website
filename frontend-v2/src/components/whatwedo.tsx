import { Col, Row, Container, Card } from "react-bootstrap";
import awareness from "../assets/awareness.png";
import solutions from "../assets/solutions.png";
import colab from "../assets/colaboration.png";
import innovation from "../assets/innovation.png";

export const WhatWeDo = () => {
    return (
        <Row>
            <Col className="text-center d-flex flex-column align-items-center gap-4">
                <span className="section-title-2 t">WHAT WE DO</span>
                <p>At ReduceCO2Now, we use digital platforms, education, research, and collaboration to inspire informed action and empower people around the world to become part of the solution.</p>
                <Container fluid="md" className="d-flex gap-5">
                    <Card className="move-up">
                        <Card.Img variant="top" src={awareness} />
                        <Card.Body>
                            <Card.Title>Raise Awareness</Card.Title>
                            <Card.Text>Making climate science understandable, engaging, and accessible.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="move-up">
                        <Card.Img variant="top" src={solutions} />
                        <Card.Body>
                            <Card.Title>Promote Solutions</Card.Title>
                            <Card.Text>Scalable solutions that deliver measurable reductions in atmospheric CO₂.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="move-up">
                        <Card.Img variant="top" src={colab} />
                        <Card.Body>
                            <Card.Title>
                                Encourage Collaboration
                            </Card.Title>
                            <Card.Text>
                                Between individuals, researchers, organizations, businesses, and policymakers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="move-up">
                        <Card.Img variant="top" src={innovation} />
                        <Card.Body>
                            <Card.Title>Support Innovation</Card.Title>
                            <Card.Text>Innovative ideas that contribute to a carbon-negative future.</Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Col>
        </Row>
    )
}