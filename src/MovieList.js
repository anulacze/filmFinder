import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import { GenreSelector } from "./GenreSelector";

const paramsObj = {
    'most-popular': 'sort_by=popularity.desc',
    'most-rated': 'sort_by=vote_count.desc',
    latest: `year=${new Date().getFullYear()}&sort_by=release_date.desc`
}

export function MovieList() {
    const [arrOfMovies, setArrOfMovies] = useState([]);
    const { most } = useParams();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const genre = params.get('genre');
    const genreString = genre ? `&with_genres=${genre}` : '';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=c11fc0a3be75971e8bdf0e71c41727f9&${paramsObj[most]}${genreString}`).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            setArrOfMovies(data.results);
        })
    }, [most, search])

    return (
        <>
            <GenreSelector />
            <ul>
                {arrOfMovies.map((element) => {
                    return (
                        <li key={element.id}>
                            {element.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} /> : <p className="listElement">Image not found</p>}
                            <div className="listElement">
                                <p>{element.title}</p>
                                <p>{element.overview}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}