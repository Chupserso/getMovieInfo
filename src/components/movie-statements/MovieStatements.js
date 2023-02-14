import "./MovieStatements.css";

const MovieStatements = (props) => {
    const data = props.data;

    return (
        <div className="movie-statements">
            <div className="movie-statement">
                <div className="movie-statement-title">Plot</div>
                <div className="movie-statement-text">
                    {data.plot}
                </div>
            </div>
            <div className="movie-statement">
                <div className="movie-statement-title">Actors</div>
                <div className="movie-statement-text">
                    {data.actors}
                </div>
            </div>
        </div>
    );
}

export default MovieStatements;