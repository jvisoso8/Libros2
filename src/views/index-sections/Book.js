import React from "react";
import BookView from "./BookView.js";

// reactstrap components

import {
    Container,
    Row,
    Col,
    Card,

    CardImg,
    CardBody,
    CardTitle,
    CardText,

    Button,
    FormGroup,

    Modal,
    ModalBody,

    UncontrolledTooltip,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover,

} from "reactstrap";

// core components



function Book(props) {
    console.log(props)
    let src = props.src.toString()
    let authorName = props.author
    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    return (

        <>

                <Container>


                            <div >


                                <Card style={{ width: '10rem'}} className="bg-whiteW">
                                    <CardImg variant="top" src={src} />
                                    <CardBody >
                                        <CardTitle> Sufficiently Advanced Magic</CardTitle>
                                        <CardText>
                                            <p className="text-muted small">Author: {authorName}</p>

                                        </CardText>

                                        <Button

                                                variant="primary"
                                                action="https://google.com"
                                                className="btn-tooltip mr-1"
                                                color="default"
                                                id="tooltip1"
                                                type="button"
                                                onClick={() => setModal1(true)}
                                        >Go somewhere
                                        </Button>
                                        <Modal size="lg" isOpen={modal1} toggle={() => setModal1(false)}>
                                            <div className="modal-header justify-content-center">
                                                <button
                                                    className="close"
                                                    type="button"
                                                    onClick={() => setModal1(false)}
                                                >
                                                    <i className="now-ui-icons ui-1_simple-remove"></i>
                                                </button>
                                                <h4 className="title title-up">Book Quick Info</h4>
                                            </div>
                                            <ModalBody>
                                                <BookView/>
                                            </ModalBody>
                                            <div className="modal-footer">
                                                <Button color="default" type="button">
                                                    More Details
                                                </Button>
                                                <Button color="default" type="button">
                                                    Where to Buy
                                                </Button>
                                                <Button
                                                    color="danger"
                                                    type="button"
                                                    onClick={() => setModal1(false)}
                                                >
                                                    Close
                                                </Button>
                                            </div>
                                        </Modal>
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




                </Container>

        </>
    );
}

export default Book;
