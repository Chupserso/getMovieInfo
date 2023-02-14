import "./App.css"

import {useState, useEffect, useCallback } from "react";

import MovieBlock from "../movie-block/MovieBlock";

const App = () => {
    const [state, setState] = useState({
        data: {},
        movie: "Iron Man",
        error: false,
        loading: false
    });

    const searchMovie = (movie) => {
        setState({
            data: state.data,
            movie: movie,
            error: state.error,
            loading: state.loading
        });
    }

    const onError = (error) => {
        setState({
            data: state.data,
            movie: state.movie,
            error: true,
            loading: false
        });
    }

    const onDataLoading = () => {
        setState({
            loading: true,
            data: state.data,
            movie: state.movie,
            error: false
        })
    }

    const onDataLoaded = (data) => {
        console.log(data);
        const newData = {
            title: data.Title,
            logotype: data.Poster,
            rating: data.imdbRating,
            year: data.Year,
            time: data.Runtime,
            genres: data.Genre,
            plot: data.Plot,
            actors: data.Actors,
        }
        setState({
            data: newData,
            movie: state.movie,
            error: false,
            loading: false,
        })
    }

    const updateData = useCallback(() => {
        onDataLoading();
        const movie = state.movie;
        const _apiKey = "fc1fef96";
        const _apiUrl = `http://www.omdbapi.com/?t=${movie}&apikey=${_apiKey}`;
        fetch(_apiUrl)
            .then((response) => {
                return response.json();
            })
            .then(onDataLoaded)
            .catch(onError);
    })

    useEffect(updateData, [state.movie]);

    return (
        <div className="wrapper">
            <MovieBlock loading={state.loading} data={state.data} searchMovie={searchMovie} error={state.error} />
        </div>
    );
}

export default App;