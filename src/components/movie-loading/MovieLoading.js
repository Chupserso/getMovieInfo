import "./MovieLoading.css"

import loadingImg from "./loading.gif";

const MovieLoading = () => {
    return (
        <img src={loadingImg} alt="loadingImg" className="movie-loading" />
    );
}

export default MovieLoading;