import { useState } from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard";

export const Search = () => {
    const [books, setBooks] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [message, setMessage] = useState("Search for Books Here");

    const searchBooks = () => {
        API.searchBooks(searchWord).then((results) => {
            console.log(results);
        });
    };

    return (
        <div className="container text-center">
            <div className="row"></div>
        </div>
    );
};
