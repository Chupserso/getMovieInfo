import "./MovieSearch.css";

import { useState } from "react";

const MovieSearch = (props) => {
    const [text, setText] = useState("");

    const onInput = (e) => {
        setText(e.target.value);
    }

    const onForm = (e) => {
        e.preventDefault();
        props.searchMovie(text);
        setText("")
    }

    return (
        <form method="get" className="movie-search" onSubmit={onForm}>
            <input
            type="text"
            className="movie-input"
            placeholder="Movie title"
            onChange={onInput}
            value={text}
            />

            <input
            type="submit"
            className="movie-button"
            value="Search"
            />
        </form>
    );
}

export default MovieSearch;