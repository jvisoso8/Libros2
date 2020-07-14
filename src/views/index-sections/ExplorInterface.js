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
import booksTestData from "../examples/booksTestData";
import Book from "./Book";
import categoryData from "../examples/categoryData";
import BtnCategory from "./BtnCategory";
import CategoryBtns from "./CategoryBtns";

// core components

function ExploreInterface() {
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
    React.useEffect(() => {
        if (
            !document
                .getElementById("sliderRegular")
                .classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderRegular"), {
                start: [50],
                connect: [true, false],
                step: 0.5,
                range: { min: 0, max: 100 },
            });
        }
        if (
            !document.getElementById("sliderDouble").classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderDouble"), {
                start: [20, 80],
                connect: [false, true, false],
                step: 1,
                range: { min: 0, max: 100 },
            });
        }
    });



    return (
        <>

            <div className="section  bg-white  " id="basic-elements">

                <Container>


                    <h3 className="category">Pick your Category!</h3>


                    <Row>
                        <Col md="10">
                            <CategoryBtns />
                        </Col>
                    </Row>



                </Container>
            </div>
        </>
    );
}

export default ExploreInterface;
