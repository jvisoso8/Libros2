import React, { Component } from 'react';
import axios from 'axios'

//Tienes que mandar categorias y tags dentro de un arreglo, eso es lo unico.

export default class AddCat extends Component {
    
    constructor(props){ 
        super(props);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            
        }
    };
    componentDidMount(){
        //Por ahora vacío.
        
    };
    

    onSubmit(e){
        //Previene el comportamiento default del html despues del subbmit.
        e.preventDefault();
        
    };



    render() {
        return (
            <div className = "container">
                

            </div>    
        );
    }
}