import React from "react";

// reactstrap components

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    UncontrolledTooltip
} from "reactstrap";

// core components

function Book(props) {
    console.log(props)
    let src = props.src.toString()
    let authorName = props.author
    return (

        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div >


                                <Card style={{ width: '10rem' }} className="bg-whiteW">
                                    <CardImg variant="top" src={src} />
                                    <CardBody>
                                        <CardTitle> Sufficiently Advanced Magic</CardTitle>
                                        <CardText>
                                            <p><strong>Author:</strong> {authorName}</p>

                                        </CardText>
                                        <Button variant="primary"
                                                className="btn-tooltip mr-1"
                                                color="default"
                                                id="tooltip1"
                                                type="button"
                                        >Go somewhere</Button>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="bottom"
                                            target="tooltip1"
                                        >
                                            Tags : test
                                        </UncontrolledTooltip>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>


                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Book;
