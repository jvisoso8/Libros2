import React, { Component } from 'react';
import axios from 'axios'

//Tienes que mandar categorias y tags dentro de un arreglo, eso es lo unico.

export default class GetBook extends Component {
    
    constructor(props){ 
        super(props);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            tags: [],
            categories: []
        }
    };
    componentDidMount(){
        //Por ahora vacío.
        
    };
    

    
    //Para hacer la consulta desde otro lado bien puedes pracricamente copiar este método
    //a otra página y se hace. 
    //SON ARREGLOS
    //SON ARREGLOS
    //SON ARREGLOS    
    //SON ARREGLOS
    //SON ARREGLOS
    //SON ARREGLOS
    //SON ARREGLOS
    onSubmit(e){
        //Previene el comportamiento default del html despues del subbmit.
        e.preventDefault();
        const book = {
            categories: this.state.categories,
            tags:  this.state.tags, 
        }     
        axios.post('http://localhost:5000/books/get',book)
            .then(res => document.getElementById("divError").innerHTML = res.data)
            .catch(err => document.getElementById("divError").innerHTML = err.data);
        this.setState({        
            categories: [],
            tags:  [],         
        });
    };



    render() {
        return (
            <div className = "container">
                <h3>Get Book</h3>
                <div id = "divError"></div>
            
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value="Buscar Libros" className="btn btn-primary" />
                    </div>
                </form>

            </div>    
        );
    }
}
