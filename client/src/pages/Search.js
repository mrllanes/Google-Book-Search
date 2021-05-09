import { useState } from "react";
import API from "../utils/API";
import { BookCard } from "../components/BookCard";
import { SearchField } from "../components/SearchField";

export const Search = () => {
    const [books, setBooks] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [message, setMessage] = useState("Search for Books Here");

    const searchBooks = () => {
        API.searchBooks(searchWord)
            .then((results) => {
                console.log(results);
                setBooks(results.data);
            })
            .catch(() => {
                setBooks([]);
                setMessage("Nothing to see here, try again!");
            });
    };

    return (
        <>
            <div className="container text-center">
                <SearchField />
                <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={searchBooks}
                >
                    Search
                </button>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        {books.map((data) => (
                            <div key={data.id} classname="col">
                                <BookCard {...data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
