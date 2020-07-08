import React from "react";

// reactstrap components
import {Container, Row, Col, Button} from "reactstrap";
import categoryData from "../examples/categoryData";
import BtnCategory from "./BtnCategory";

// core components

class CategoryBtns extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            btnCategory: categoryData.map(category => <BtnCategory name = {category.name} onClick={this.handleClick} />)

        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick() {
        this.setState(prevState => {
            return {
                btnCategory: <BtnCategory name = {prevState.count + 1} onClick={this.handleClick} />,
                count: prevState.count + 1
            }
        })
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