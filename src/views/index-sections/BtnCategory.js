import React from "react";

// reactstrap components
import {Container, Row, Col, Button} from "reactstrap";

// core components

function BtnCategory(props) {
    console.log(props)
    let name = props.name.toString()
    return (

        <>
            <Button className="bg-category-btn" size="lg">
                {name}
            </Button>
        </>
    );
}

export default BtnCategory;