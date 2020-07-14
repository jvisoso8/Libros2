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
import Filters from "./Filters";


// core components

function Explore() {
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
            <div className="section-explore  bg-white " id="basic-elements">
                <h1 className="title-center ">Explore</h1>
                <div className="space-50"></div>
                <Container className="section-example">
                    <div className="row">
                    <div className="col-lg-9">
                        <ExploreInterface />
                        <p className="category">Top Books based on your search:</p>
                        <div className="small-space"></div>
                        <BookGalery />
                        <div className="small-space"></div>
                        <p className="text-link font-weight-bold ">See All...</p>
                    </div>
                    <div className="col-sm-3">

                        <Filters />



                    </div>

                    </div>


                </Container>
            </div>
        </>
    );
}

export default Explore;
