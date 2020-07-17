import React from "react";
import { FormGroup, Input} from "reactstrap";
import Filter from "./Filter";

class Filters extends React.Component {
    constructor() {
        super();
        this.state = {
            filters:[
                {id:0, name: "filter 0", active: true},
                {id:1, name: "filter 1", active: true},
                {id:2, name: "filter 2", active: true},
                {id:3, name: "filter 3", active: false},
                {id:4, name: "filter 4", active: false},
                {id:5, name: "filter 5", active: false},
                {id:6, name: "filter 6", active: false},
                {id:7, name: "filter 7", active: false}
            ],
            changed: false

        };
        this.handleClickFilter = this.handleClickFilter.bind(this);
    };
    handleClickFilter = (e) => {
        let id = e.target.getAttribute("id").toString()
        console.log(this.state.filters)
        this.setState(prevState => {
                this.state.filters[id].active = !prevState.filters[id].active
                console.log(this.state.filters)
                return(
                    this.state.change = !prevState.change
                )
                }
            );
    };
    render() {
        return(
            <>
                <h3 className="category ">Pick your Filter</h3>
                <p className="category ">Your  filters</p>
                    <Filter filters={this.state.filters} cat= "used" handel={this.handleClickFilter}/>
                <p className="category ">Popular Filters</p>
                <FormGroup>
                    <Input
                        className="bg-whiteW"
                        defaultValue=""
                        placeholder="Other Filters"
                        type="text"
                    ></Input>
                </FormGroup>
                <Filter  filters={this.state.filters} cat = "unused" handel={this.handleClickFilter} />
            </>
        )
    }
}
export default Filters
