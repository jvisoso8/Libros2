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
    }

    handleCatChange(temp) {
        console.log(temp)
        this.setState({
            category:temp
        })


    }

    render() {
        return (
            <>
                <div className="section-explore  bg-white " id="basic-elements">
                    <h1 className="title-center ">Explore</h1>
                    <div className="space-50"></div>
                    <Container className="section-example">
                        <div className="row">
                        <div className="col-lg-9">
                            <ExploreInterface catH={this.handleCatChange} />
                            <p className="category">Top Books based on your search:</p>
                            <div className="small-space"></div>
                            <BookGalery  cat={this.state.category}/>
                            <div className="small-space"></div>
                            <p className="text-link font-weight-bold ">See All...</p>
                        </div>
                        <div className="col-sm-3">

                            <Filters filters={this.state.category} />



                        </div>

                        </div>


                    </Container>
                </div>
            </>
        );
    }
}

export default Explore;
