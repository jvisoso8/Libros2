import React from "react";

// reactstrap components
import {Container, Row, Col, Button} from "reactstrap";
import CategoryBtns from "./CategoryBtns";

// core components

const BtnCategory = ( props ) => {
    return (
        <Button size="lg" className="info" onClick={props.changeMain} name={props.name} >
            {props.name}
        </Button>
    )
};





export default BtnCategory;