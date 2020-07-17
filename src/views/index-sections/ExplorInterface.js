import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import CategoryBtns from "./CategoryBtns";

// core components

function ExploreInterface(props) {
    React.useEffect(() => {
        if (!document
                .getElementById("sliderRegular")
                .classList.contains("noUi-target")) {
                    Slider.create(document.getElementById("sliderRegular"), {
                    start: [50],
                    connect: [true, false],
                    step: 0.5,
                    range: { min: 0, max: 100 },
                });
        }
        if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
            Slider.create(document.getElementById("sliderDouble"), {
                start: [20, 80],
                connect: [false, true, false],
                step: 1,
                range: { min: 0, max: 100 },
            });
        }
    });

    return(
        <>
                <h3 className="category">Pick your Category!</h3>
                <Row>
                    <Col>
                        <CategoryBtns catH = {props.catH}/>
                    </Col>
                </Row>
        </>
    );
}
export default ExploreInterface;
