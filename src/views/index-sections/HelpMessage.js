import React from "react";
// reactstrap components

import {
    Container,
    Card,
    Button,
    Modal,
    ModalBody,
} from "reactstrap";

// core components



function HelpMessage() {
    const [modal1, setModal1] = React.useState(false);
    return(
       <Card>
        <Container className="">
            <div className="space-50" />
            <h3>
                Hi, we're developing this book search page and we would love your opinion.
                You can leave a comment or join our Discord Channel.
            </h3>
            <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal1(true)}
                size = "lg">
                Comments
            </Button>
            <Button
                size = "lg">
                Discord Channel
            </Button>
            <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                    <button
                        className="close"
                        type="button"
                        onClick={() => setModal1(false)}>
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <h4 className="title title-up">Comments</h4>
                </div>
                <ModalBody>
                    <p>Please give us your opinions on anything and everything</p>
                </ModalBody>
                <Container>
                    <form >
                        <div className="form-group">
                            <label htmlFor="correo">Email address</label>
                            <input type="email" className="form-control" id="correo" name="correo"
                                placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Asunto</label>
                            <input type="text" className="form-control" name="subject" id="subject"/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="texto">Example textarea</label>
                            <textarea className="form-control" id="texto" name="texto" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" id="submit">Submit</button>
                    </form>
                </Container>
                <div className="modal-footer">
                    <Button color="default" type="button">
                        Send!
                    </Button>
                    <Button
                        color="danger"
                        type="button"
                        onClick={() => setModal1(false)}>
                        Close
                    </Button>
                </div>
            </Modal>
        </Container>
    </Card>
    );
}

export default HelpMessage;
