import React, { Component } from 'react';
//import axios from 'axios'
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
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: "",
            author: "",
            url: "",
            isbn: "",
            date: new Date(),
            sinopsis: "",
            categories: "",
            tags: ""
        }
    };

    onChangeTitle(e){
        this.setState({
            title: e.target.value
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
        this.setState({
            categories: e.target.value
        });
    };
    onChangeTags(e){
        this.setState({
            tags: e.target.value
        });
    };

    onSubmit(e){
        //Previene el comportamiento default del html despues del subbmit.
        let axios = "";
        e.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author,
            url:  this.state.url,
            isbn:  this.state.isbn,
            date:  this.state.date,
            sinopsis:  this.state.sinopsis,
            categories:  this.state.categories,
            tags:  this.state.tags
        }
        console.log(book)
        /*
        axios.post('http://localhost:5000/books/add',book)
            .then(res => console.log(res.data));
        this.setState({
            title: ""
        });*/
    };



    render() {
        return (
            <div className = "container">
                <h3>Add Book</h3>
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
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.categories}
                                onChange={this.onChangeCategories}
                                placeholder="['Fantasy' , 'Sci-Fi' , 'Young Adult' , ...]"
                        />
                    </div>
                    <div className="form-group">
                        <label>Tags: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.tags}
                                onChange={this.onChangeTags}
                                placeholder="['Space' , 'Space Travel' , 'Mars' , ...]"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}