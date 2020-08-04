import React, { Component } from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class AddBook extends Component {
    
    constructor(props){ 
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeURL = this.onChangeURL.bind(this);
        this.onChangeISBN = this.onChangeISBN.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeSinopsis = this.onChangeSinopsis.bind(this);
        this.onChangeCategories = this.onChangeCategories.bind(this);
        this.delCategories = this.delCategories.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onChangeSeries = this.onChangeSeries.bind(this);
        this.onChangeDummy = this.onChangeDummy.bind(this);
        this.onChangeDummyTag = this.onChangeDummyTag.bind(this);
        this.delTags = this.delTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            title: "",
            author: "",
            url: "",
            isbn: "",
            date: new Date(),
            sinopsis: "",
            categories: [],
            dummyCat:"",
            dummyTag:"",
            optionTags: [],
            optionCategories: [],
            tags: [],
            series: ""
        }
    };
    componentDidMount(){
        //Cuando tenga BD de Categorias tengo que hacer un get aqui.
        var arre = ["1","2","3","4","5"]
        this.setState({
            optionCategories: arre,
            optionTags: arre,
            dummyCat: arre[0],
            dummyTag: arre[0]
        });
        
        /*
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0){
                    

                    this.setState({
                        categories: response.data.map(user => user.username),
                        username: response.data[0].username 
                    }); 
          
                }
            });
            */
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    };
    onChangeDummy(e){
        this.setState({
            dummyCat: e.target.value
        });
    };

    onChangeDummyTag(e){
        this.setState({
            dummyTag: e.target.value
        });
    };

    onChangeAuthor(e){
        this.setState({
            author: e.target.value
        });
    };
    onChangeURL(e){
        this.setState({
            url: e.target.value
        });
    };
    onChangeISBN(e){
        this.setState({
            isbn: e.target.value
        });
    };
    onChangeDate(date){
        this.setState({
            date: date
        });
        
    };
    onChangeSinopsis(e){
        this.setState({
            sinopsis: e.target.value
        });
    };
    onChangeCategories(e){
        e.preventDefault();
        this.setState({
            categories: this.state.categories.concat([this.state.dummyCat])
        });
        document.getElementById("categorias").innerHTML = document.getElementById("categorias").innerHTML + " " + this.state.dummyCat
    };

    delCategories(e){
        e.preventDefault();
        var auxArre = this.state.categories
        var index = auxArre.indexOf(String(this.state.dummyCat));
        auxArre.splice(index, 1);
        if(index !== -1){
            this.setState({categories: auxArre});
        }
        document.getElementById("categoriasQuit").innerHTML = document.getElementById("categoriasQuit").innerHTML + " " + this.state.dummyCat
    };




    onChangeTags(e){
        e.preventDefault();
        this.setState({
            tags: this.state.tags.concat([this.state.dummyTag])
        });
        document.getElementById("tags").innerHTML = document.getElementById("tags").innerHTML + " " + this.state.dummyTag
        console.log(this.state.tags)
    };
    delTags(e){
        e.preventDefault();
        var auxArre = this.state.tags
        var index = auxArre.indexOf(String(this.state.dummyTag));
        auxArre.splice(index, 1);
        if(index !== -1){
            this.setState({tags: auxArre});
        }
        document.getElementById("tagsQuit").innerHTML = document.getElementById("tagsQuit").innerHTML + " " + this.state.dummyTag
    };


    onChangeSeries(e){
        this.setState({
            series: e.target.value
        });
    };
        
    onSubmit(e){
        //Previene el comportamiento default del html despues del subbmit.
        e.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author,
            image:  this.state.url,
            isbn:  this.state.isbn,
            date:  this.state.date,
            sinopsis:  this.state.sinopsis,
            categories: this.state.categories,
            tags:  this.state.tags,
            series:  this.state.series   
        }
        console.log(book)
        console.log(typeof book.categories)
        
        axios.post('http://localhost:5000/books/add',book)
            .then(res => document.getElementById("divError").innerHTML = res.data)
            .catch(err => document.getElementById("divError").innerHTML = err.data);
        this.setState({
            title: "",
            author: "",
            image:  "",
            url: "",
            isbn:  "",
            date:  new Date(), 
            sinopsis:  "",
            categories: [],
            tags:  "",
            series:  "" ,
            dummyCat: this.state.optionCategories[0] 
            
        });
        document.getElementById("categorias").innerHTML = "Categorias actuales: "
    };



  render() {
    return (
      <div className = "container">
        <h3>Add Book</h3>
        <div id = "divError"></div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Title: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                </div>
                <div className="form-group"> 
                    <label>Author: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.author}
                        onChange={this.onChangeAuthor}
                        />
                </div>
                <div className="form-group"> 
                    <label>Series: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.series}
                        onChange={this.onChangeSeries}
                        />
                </div>
                <div className="form-group"> 
                    <label>Image URL: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.url}
                        onChange={this.onChangeURL}
                        />
                </div>
                <div className="form-group"> 
                    <label>ISBN: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.isbn}
                        onChange={this.onChangeISBN}
                        />
                </div>
                <div className="form-group"> 
                    <label>Publication Date: </label>
                    <br/>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                />
                </div>
                <div className="form-group"> 
                    <label>Sinopsis: </label>
                    <textarea type="text"
                        required
                        className="form-control"
                        value={this.state.sinopsis}
                        onChange={this.onChangeSinopsis}
                        rows="5"
                        />
                </div>
                <div className="form-group"> 
                <label>Categories: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.dummyCat}
                        onChange = {this.onChangeDummy}>
                        {
                        //Esto Saca nuestro arreglo de users en Mongo y
                        //el map nos permite regresar algo para cada elemento en
                        //un arreglo.

                        //para cada usuario se regresa una opcion en el ddl
                        //con el nombre de cada usuario en el arreglo
                        this.state.optionCategories.map(function(option) {
                            return <option  key={option} value={option}>
                                {option}
                            </option>;
                        })
                        }
                    </select>
                    <br />
                    <button onClick = {this.onChangeCategories}>Add Category!</button>
                    <button onClick = {this.delCategories}>Delete Category</button>
                </div>
                <div id = "categorias">Categorias atuales: </div>
                <br />
                <div id = "categoriasQuit">Categorias quitadas: </div>
                <br />
                <br />
                <div className="form-group"> 
                <label>Tags: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.dummyTag}
                        onChange = {this.onChangeDummyTag}>
                        {
                        this.state.optionTags.map(function(option) {
                            return <option  key={option} value={option}>
                                {option}
                            </option>;
                        })
                        }
                    </select>
                    <br />
                    <button onClick = {this.onChangeTags}>Add Tag!</button>
                    <button onClick = {this.delTags}>Delete Tag</button>
                </div>
                <div id = "tags">Tags atuales: </div>
                <br />
                <div id = "tagsQuit">Tags quitadas: </div>
                <br />
                <br />
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
      </div>
    );
  }
}