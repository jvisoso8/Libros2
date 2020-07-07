import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Book from "./Book";
import booksTestData from "/Users/josevisoso/WebstormProjects/librosprototipe/src/views/examples/booksTestData.js";

// core components

function BookGalery() {
    const booksData = booksTestData.map(book => <Book src={book.src} key = {book.id}  author={book.author} />)

    return (
        <>
            <div className="custom-control-inline" >
                {booksData}

            </div>
        </>
    );
}

export default BookGalery;
