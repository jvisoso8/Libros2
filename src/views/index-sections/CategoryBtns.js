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
            //btnCategory: categoryData.map(category => <BtnCategory name = {category.name} onClick="handelClick" />)
            categories: [
                { id: 'fdsd', name: 'Fantasy'  },
                { id: 'adsf', name: 'Mastery' },
                { id: 'afdsf', name: 'SiFi' },
            ],
            displayQuestions: false,
            btnCategory : "fiction",


        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (e) => {
        let name = e.target.getAttribute("name")
        this.setState(prevState => {
            return {
                btnCategory: name,
                categories:  [
                {name: "magic"},
                {name: "fighting"}
            ]
            }
        })
    }


    displayQuestion = () => {
        this.setState({
            displayQuestions: !this.state.displayQuestions
        })
    }

    render() {
        let subcategories
        if ( this.state.displayQuestions ) {
            subcategories = (
                <div>
                    { this.state.categories.map((categorie, index) => {
                        return <BtnCategory key={categorie.id}
                                         name={categorie.name} changeMain={this.handleClick} />
                    })}
                </div>
            )
        }
        return (

            <>

            <button className="btn" onClick={this.displayQuestion}>{this.state.btnCategory}</button>
            {subcategories}

            </>
        );
    }
}

export default CategoryBtns;