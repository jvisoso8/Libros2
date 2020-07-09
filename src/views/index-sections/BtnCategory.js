import React from "react";

// reactstrap components
import {Container, Row, Col, Button} from "reactstrap";
import CategoryBtns from "./CategoryBtns";

// core components

class BtnCategory extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            btnCategory: <></>,
            isHidden: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)

    }

    handleClick() {

        this.setState((prevState) => {
            return {
                name: this.state.name.substr(0,this.state.name.length-1 ),
                btnCategory:
                    <div >
                        <Button size="lg" onClick={this.handleClick}>
                            {this.state.name.substr(0,this.state.name.length-1 )}
                        </Button>
                        <p/>
                        <div className="custom-control-inline">
                        <Button size="lg" onClick={this.handleClick1}>
                            {this.state.name+1}
                        </Button>
                        <Button size="lg" onClick={this.handleClick2}>
                            {this.state.name+2}
                        </Button>
                        </div>

                    </div>,
                isHidden: true
            }
        })
    }
    handleClick1() {

        this.setState((prevState) => {
            return {
                name: this.state.name +"1",
                btnCategory:
                    <div >
                        <Button size="lg" onClick={this.handleClick}>
                            {this.state.name }
                        </Button>
                        <p/>
                        <div className="custom-control-inline">
                            <Button size="lg" onClick={this.handleClick1}>
                                {this.state.name + "1"}
                            </Button>
                            <Button size="lg" onClick={this.handleClick2}>
                                {this.state.name + "2"}
                            </Button>
                        </div>

                    </div>,
                isHidden: true
            }
        })
    }
    handleClick2() {

        this.setState((prevState) => {
            return {
                name: this.state.name +"2",
                btnCategory:
                    <div >
                        <Button size="lg" onClick={this.handleClick}>
                            {this.state.name }
                        </Button>
                        <p/>
                        <div className="custom-control-inline">
                            <Button size="lg" onClick={this.handleClick1}>
                                {this.state.name + "1"}
                            </Button>
                            <Button size="lg" onClick={this.handleClick2}>
                                {this.state.name + "2"}
                            </Button>
                        </div>

                    </div>,
                isHidden: true
            }
        })
    }

    render() {


        return (

            <Container>
                {
                    !this.state.isHidden &&
                    <Button size="lg" onClick={this.handleClick}>
                        {this.props.name}
                    </Button>
                }
                {this.state.btnCategory}

            </Container>
        );


    }
}

export default BtnCategory;