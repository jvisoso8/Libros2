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




class Explore extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            filters: []
        }
        this.handleCatChange = this.handleCatChange.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleCatChange(temp) {
        console.log(temp)
        this.setState({
            category:temp
        })


    }
    handleFilterChange(temp) {
        console.log(temp)
        this.setState({
            filters: temp
        })


    }




    render() {
        return (
            <>
                <div className="section-explore  bg-white " id="basic-elements">
                    <h1 className="title-center ">Explore</h1>
                    <div className="space-50"></div>
                    <Container className="section-example">
                        <Container className="section-example">
                            <div className="row">
                                <div className="col-lg-8">
                                    <ExploreInterface catH={this.handleCatChange} />
                                </div>
                                <div className="col-lg-4">
                                    <Filters filters={this.state.filters} />
                                </div>
                            </div>
                        </Container>
                        <div className="small-space"></div>

                        <p className="category">Top Books based on your search:</p>
                        <div className="row">
                            <div className="small-space"></div>
                            <BookGalery  cat={this.state.category}/>
                        </div>
                        <p className="text-link font-weight-bold ">See All...</p>
                    </Container>
                </div>
            </>
        );
    }
}

export default Explore;
