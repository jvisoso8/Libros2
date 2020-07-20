import React from "react";

// reactstrap components
import {Container, Row, Col, Button, Spinner} from "reactstrap";
import categoryData from "../examples/categoryData";
import BtnCategory from "./BtnCategory";

// core components

class CategoryBtns extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            //btnCategory: categoryData.map(category => <BtnCategory name = {category.name} onClick="handelClick" />)
            loading : false,
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
        this.props.catH(name)
        //aqui va el api call para nuevas categorias
        this.setState({loading: true})
        /*
        //ejemplo de api call
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    btnCategory: data.id
                })
            })
            */


        this.setState(prevState => {
            return {
                loading: false,
                btnCategory: name,
                categories:  [
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
            }
        })

    }


    goBack = () => {
        this.setState({
            displayQuestions: !this.state.displayQuestions
        })
        //por el momento solo esconde lo de abajo necesitamos la bd para hacer esto bn y modificar todo a api calls
        //https://scrimba.com/p/p7P5Hd/c79Jask
    }

    render() {
        let subcategories
        const loading = this.state.loading ? <Spinner className="spinner-grow" /> : <></>
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
                <h1>{loading}</h1>
                <Button size="lg" className="bg-blue text-uppercase" onClick={this.goBack}>
                    {this.state.btnCategory}
                </Button>

                {subcategories}

            </>
        );
    }
}

export default CategoryBtns;