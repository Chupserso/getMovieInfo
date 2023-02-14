import "./MovieProperties.css";

import starImg from "../../resources/img/star.png";

const MovieProperties = (props) => {
    const data = props.data;

    return (
        <div className="movie-properties">
            <div className="movie-logotype">
                <img src={data.logotype} alt="logotype" />
            </div>
            <div className="movie-content">
                <div className="movie-title">
                    <h2>{data.title}</h2>
                </div>
                <div className="movie-rating">
                    <div className="movie-rating-icon">
                        <img src={starImg} alt="movie-rating-icon" />
                    </div>
                    <div className="movie-rating-text">
                        {data.rating}
                    </div>
                </div>
                <div className="movie-date-properties">
                    <div className="movie-date-property">{data.year}</div>
                    <div className="movie-date-property">{data.time}</div>
                </div>
                <div className="movie-genres">
                    {data.genres}
                </div>
            </div>
        </div>
    );
}

export default MovieProperties