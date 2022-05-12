import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { getGames, getReviews } from "./GameManager.js"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const GameDetails = (props) => {
    const [game, assignGame] = useState([])
    const [reviews, assignReviews] = useState([])
    const history = useHistory()
    const { gameId } = useParams()
    useEffect(
        () => {
            fetch(`http://localhost:8000/games/${gameId}`, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem("lu_token")}`
                }
            })
                .then(r => r.json())
                .then((data) => {
                    assignGame(data)
                })
        }, [gameId]
    )



    useEffect(
        () => {
            getReviews()
                .then((data) => {
                    assignReviews(data)
                })
        }, [gameId]
    )






    return (
        <>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: `/games/${gameId}/review` })
                }}
            >Review Game</button>
            <br></br>
            <br></br>
            <h1>Game: {game.title}</h1>
            <h1>Description: {game.description}</h1>
            <h1>Released: {game.year_released}</h1>
            <h1>Number Of Players: {game.number_of_players}</h1>
            <h1>Playtime In Minutes: {game.estimated_time_in_minutes}</h1>
            <h1>Age Recommendation: {game.age_recommendation}</h1>
            <h1>Categories: {game.categories?.map(c => {
                return c.label
            })}</h1>
            <br></br>
            <h1>Reviews</h1>
            {
                reviews.map(r => {
                    if (r.game.id === game.id) {

                        return <><hr></hr><br></br><h1>{r.review_body}</h1><br></br></>
                    } else {
                        return ""
                    }
                })
            }
        </>
    )
}


// games.map(game => {
//     return <section key={`game--${game.id}`} className="game">
//         <div className="game__title">
//             <li className="nav-item">
//                 <Link className="nav-link" to={`/games/${game.id}`}>
//                     {game.title}
//                 </Link>
//             </li>
//         </div>