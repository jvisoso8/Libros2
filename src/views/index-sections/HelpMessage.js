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



function HelpMessage() {
    const [modal1, setModal1] = React.useState(false);
   return(
       <Card>
        <Container className="">
        <div className="space-50" />
        <h3>
            Hi we are developing this page and we would love your opinion. About anything, literally anything please
            click the button and tel us what you think, or go to our discord.
        </h3>
        <Button
            color="primary"
            className="mr-1"
            onClick={() => setModal1(true)}
            size = "lg">
            Comments
        </Button>
        <Modal isOpen={modal1} toggle={() => setModal1(false)}>
            <div className="modal-header justify-content-center">
                <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">Comments</h4>
            </div>
            <ModalBody>
                <p>
                    Please give us your opinions on anything and everything
                </p>
            </ModalBody>
            <Container>
            <form >
                <div className="form-group">
                    <label htmlFor="correo">Email address</label>
                    <input type="email" className="form-control" id="correo" name="correo"
                           placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Asunto</label>
                    <input type="text" className="form-control" name="subject" id="subject" />

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
                    onClick={() => setModal1(false)}
                >
                    Close
                </Button>
            </div>
        </Modal>
        <Button
            size = "lg">
            discord
        </Button>

    </Container>

        </Card>
    );
}

export default HelpMessage;
