import React from "react";

// reactstrap components
import {Container, Row, Col, Button} from "reactstrap";
import categoryData from "../examples/categoryData";
import BtnCategory from "./BtnCategory";

// core components

class CategoryBtns extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            btnCategory: categoryData.map(category => <BtnCategory name = {category.name}  />)
        }

    }

    render() {
        return (

            <>
                <div className="bg-white" size="lg">
                    {this.state.btnCategory}
                </div>
            </>
        );
    }
}

export default CategoryBtns;