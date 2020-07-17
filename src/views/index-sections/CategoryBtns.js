import React from "react";

// reactstrap components
import {Button} from "reactstrap";

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
                { id: 'afdsf', name: 'SiFi' },],
            displayQuestions: false,
            btnCategory : "fiction",
        };
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick = (e) => {
        let name = e.target.getAttribute("name")
        this.props.catH(name)
        this.setState(prevState => {
            return {
                btnCategory: name,
                categories:[
                    {name: "magic"},
                    {name: "fighting"},
                    {name: "historical"},
                    {name: "romance"},
                    {name: "magic"},
                    {name: "fighting"},
                    {name: "historical"},
                    {name: "romance"},
                    {name: "magic"},
                    {name: "fighting"},
                    {name: "historical"},
                    {name: "romance"}
                ]
            };
        });
    };


    goBack = () => {
        this.setState({
            displayQuestions: !this.state.displayQuestions
        });
        //por el momento solo esconde lo de abajo necesitamos la bd para hacer esto bn y modificar todo a api calls
        //https://scrimba.com/p/p7P5Hd/c79Jask
    };

    render() {
        let subcategories
        if ( this.state.displayQuestions ) {
            subcategories = (
                <div>
                    {this.state.categories.map((categorie, index) => {
                        return <BtnCategory key={categorie.id} name={categorie.name} changeMain={this.handleClick} />
                        })
                    }
                </div>
            )
        }
        return (
            <>
                <Button size="lg" className="bg-blue text-uppercase" onClick={this.goBack}>{this.state.btnCategory}</Button>
                {subcategories}
            </>
        );
    };
}

export default CategoryBtns;