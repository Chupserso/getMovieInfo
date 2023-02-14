import "./MovieError.css";

import errorImg from "./error.gif";

const MovieError = () => {
    return (
        <img src={errorImg} alt="errorImg" className="movie-error" />
    );
}

export default MovieError;