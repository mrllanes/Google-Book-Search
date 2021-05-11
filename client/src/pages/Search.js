import { useState } from "react";
import API from "../utils/API";
import { BookCard } from "../components/BookCard";

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

    const handleInput = (e) => {
        setSearchWord(e.target.value);
    };

    return (
        <>
            <div className="container text-center">
                <input
                    type="text"
                    class="form-control"
                    id="searchWord"
                    placeholder="Search for a Book!"
                    value={searchWord}
                    onChange={handleInput}
                    aria-label="Search"
                    aria-describedby="button-addon2"
                />
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
                        {books.map((data, id) => (
                            <div key={data.id} classname="col">
                                <BookCard
                                    title={data.title}
                                    author={data.author}
                                    description={data.description}
                                    image={data.image}
                                    link={data.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
