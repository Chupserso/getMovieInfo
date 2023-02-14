import "./MovieBlock.css";

import MovieSearch from "../movie-search/MovieSearch";
import MovieProperties from "../movie-properties/MovieProperties";
import MovieStatements from "../movie-statements/MovieStatements";
import MovieLoading from "../movie-loading/MovieLoading";
import MovieError from "../movie-error/MovieError";

const MovieBlock = (props) => {
    const loading = props.loading ? <MovieLoading /> : null;
    const error = props.error ? <MovieError /> : null;
    let isMessage;
    switch (props.data.title) {
        case undefined:
            isMessage = true;
            break;
        default:
            isMessage = false;
            break;
    }
    let message;
    if (loading == false) {
        message = isMessage ? <h1 className="message">Movie not found</h1> : null;
    }
    const content = !(props.loading || props.error || isMessage) ? <View data={props.data} /> : null;

    return (
        <div className="movie-block">
            <MovieSearch searchMovie={props.searchMovie} />
            {loading}
            {error}
            {content}
            {message}
        </div>
    );
}

const View = (props) => {
    return (
        <div>
            <MovieProperties data={props.data} />
            <MovieStatements data={props.data} />
        </div>
    );
}

export default MovieBlock