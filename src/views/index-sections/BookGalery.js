import React from "react";

import Book from "./Book";
import booksTestData from "views/examples/booksTestData.js";

// core components


function BookGalery(props) {
    const booksData = booksTestData.map(book => <Book src={book.src} key = {book.id}  author={book.author} />)
    console.log(props.cat)
    return (
        <>
            <div className="custom-control-inline" >
                {booksData}
            </div>
        </>
    );
}

export default BookGalery;
