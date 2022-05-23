import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function GenreSelector() {
    const [genres, setGenres] = useState([]);
    const [chosenGenreID, setChosenGenreID] = useState(0);
    const navigate = useNavigate();
    const { most } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c11fc0a3be75971e8bdf0e71c41727f9`).then(response => {
            return response.json();
        }).then(data => {
            setGenres(data.genres);
        })
    },[]);

    const genredListMaker = (event) => {
        setChosenGenreID(event.target.value);
        navigate(`/filmFinder/${most}?genre=${event.target.value}`);
    }

    return (
        <div className="genreSelector">
            <label htmlFor='genreSelector'>Choose a genre:</label>
            <select id='genreSelector' value={chosenGenreID} onChange={genredListMaker}>
                {genres.map((element) => {
                    return <option key={element.id} value={element.id}>{element.name}</option>
                })}
            </select>
        </div>
    )
}