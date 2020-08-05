import React, { Component } from 'react';
import axios from 'axios'

//Tienes que mandar categorias y tags dentro de un arreglo, eso es lo unico.

export default class AddTag extends Component {
    
    constructor(props){ 
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            names: []
        }
    };
    componentDidMount(){
        axios.get('http://localhost:5000/tags/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        names: response.data.map(tag => tag.name), 
                    }); 
                }
            });
        
    };
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    };

    onSubmit(e){
        //Previene el comportamiento default del html despues del subbmit.
        e.preventDefault();
        const tag = {
            name: this.state.name
        }
        axios.post('http://localhost:5000/tags/add',tag)
            .then(res => {
                document.getElementById("res").innerHTML = res.data;
                document.getElementById("enBase").innerHTML = document.getElementById("enBase").innerHTML + "<h3>" + tag.name.toLowerCase() + "<h3>"
            })
            .catch(err => document.getElementById("res").innerHTML = err.data);
        this.setState({
            name: ""
        });
    };



    render() {
        return (
            <div className = "container">
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group"> 
                        <label>Tag: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            placeholder="Tag"
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Tag
                        " className="btn btn-primary" />
                    </div>
                    <div id = "res"></div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className = "container">
                        <div id = "enBase">
                            <h2>Tags in DB: </h2>
                            {
                            this.state.names.map(function(tag) {
                                return <h3>{tag}</h3>;
                            })
                            }  
                        </div>
                    </div>  
                </form>  
            </div>  
        );
    }
}