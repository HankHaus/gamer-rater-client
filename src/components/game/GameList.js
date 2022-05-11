import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { getGames } from "./GameManager.js"

export const GameList = (props) => {
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/games/${game.id}`}>
                                    {game.title}
                                </Link>
                            </li>
                        </div>
                        {/* <button className="btn"
                            onClick={() => {
                                history.push({ pathname: `/games/edit/${game.id}` })
                            }}
                        >Edit Game</button>
                        <button className="btn"
                            onClick={() => {
                            const deleteGame = (g) => {
                                const requestOptions = {
                                    method: 'DELETE',
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Authorization": `Token ${localStorage.getItem("lu_token")}`
                                    },
                                    body: JSON.stringify(g)
                                };
                                return fetch(`http://localhost:8000/games/${game.id}`, requestOptions)
                            }
                            deleteGame()
                            .then(() => {
                                history.push("/events")
                            })
                            .then(() => {
                                history.push("/games")
                            })
                        }}
                        >Delete Game</button>
                        <br></br>
                        <br></br> */}
                    </section>
                })
            }
        </article>
    )
}