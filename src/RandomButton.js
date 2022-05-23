import { useState } from "react";

export function RandomButton() {
    const [randomFilm, setRandomFilm] = useState(null);

    const getRandomFilm = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=c11fc0a3be75971e8bdf0e71c41727f9&`).then(response => {
            return response.json();
        }).then(data => {
            drawFilm(data.results);
        })
    }
    
    const drawFilm = (listResult) => {
        const number = Math.floor(Math.random() * 20);
        setRandomFilm(listResult[number]);
    }

    return (
        <div>
            <button onClick={getRandomFilm} className="randomButton">Get me a random film</button>
            {randomFilm && 
                <div>
                    {randomFilm.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${randomFilm.poster_path}`} /> : <p className="listElement">Image not found</p>}
                    <div className="listElement">
                        <p>{randomFilm.title}</p>
                        <p>{randomFilm.overview}</p>
                    </div>
                </div>}
        </div>
    )
}