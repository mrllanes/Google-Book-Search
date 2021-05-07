import { useEffect, useState } from "react";
import API from "../utils/API";

function Saved() {
    const [books, setBooks] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks();
    }, []);

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then((res) => setBooks(res.data))
            .catch((err) => console.log(err));
    }

    return (
        <div className="container">
            <h1>These Are Your Saved Books</h1>
        </div>
    );
}

export default Saved;
