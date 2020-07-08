import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
import ExploreInterface from "./ExplorInterface";
import Book from "./Book";
import BookGalery from "./BookGalery";

// core components
const imgStyle = {
    maxHeight: 128,
    maxWidth: 128
}
class BookView extends React.Component {
    render(){
        return(
            <Container>
                <div className="row">
                    <div className="col-4">
                        <img src = {require("assets/img/SAMcover.jpg")} style={{height: "90%",width: "90%"}}></img>
                    </div>
                    <div className="col-8">
                        <p><strong>Title: </strong>Sufficiently Advanced Magic</p>
                        <p><strong>Author: </strong>Andrew Rowe </p>
                        <p><strong>Sinopsis: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem est, dictum vel ligula eu, lacinia aliquet est. Donec facilisis pretium justo sit amet scelerisque. Fusce molestie consectetur venenatis. Sed in tempor tellus. Proin sollicitudin ex eget libero viverra, vel tincidunt dui faucibus. Duis congue bibendum sem vel bibendum. Proin venenatis lectus quis ornare posuere. Aliquam maximus mollis lorem, nec tempus dolor pharetra mollis.</p>
                        <p><strong>Pages: </strong>450</p>
                    </div>
                    <div className="col-8">
                        <p>
                            <strong>Tags: </strong>
                            <Button className="btn-round" color="info" outline type="button">
                                Hard-Magic
                            </Button>
                            <Button className="btn-round" color="info" outline type="button">
                                Fantasy
                            </Button>
                        </p>
                        <p>
                            <strong>Category: </strong>
                            <Button color="danger">
                                Cat1
                            </Button>
                            <Button color="danger">
                                Cat2
                            </Button>
                        </p>
                        <p>
                            <strong>Buy: </strong>
                            <Button color="danger">
                                Kindle
                            </Button>
                            <Button color="danger">
                                Audiobook
                            </Button>
                            <Button color="danger">
                                Paperback
                            </Button>
                        </p>

                    </div>
                </div>
            </Container>

        );
    }
}

export default BookView;