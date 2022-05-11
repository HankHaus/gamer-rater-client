import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getCats } from "./GameManager"
import { createGame } from './GameManager.js'


export const GameForm = () => {
    const history = useHistory()
    const [cats, setCats] = useState([])
    useEffect(() => {
        getCats().then(data => setCats(data))
    }, [])
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

    const [currentGame, setCurrentGame] = useState({
        number_of_players: 0,
        year_released: 0,
        title: "",
        description: "",
        estimated_time_in_minutes: 0,
        age_recommendation: "",
        categories: []
    })



    const changeGameState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = { ...currentGame }
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentGame(copy)
    }



    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Create New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released: </label>
                    <input type="text" name="year_released" required autoFocus className="form-control"
                        value={currentGame.year_released}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="number_of_players">Number Of Players: </label>
                    <input type="text" name="number_of_players" required autoFocus className="form-control"
                        value={currentGame.number_of_players}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="age_recommendation">Age Recommendation: </label>
                    <input type="text" name="age_recommendation" required autoFocus className="form-control"
                        value={currentGame.age_recommendation}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categories">Game Category: </label>
                    <select name="categories"
                        onChange={(e) => {
                            // debugger
                            let copy = [...e.target.value]
                            currentGame.categories.push(parseInt(copy))
                            changeGameState(e)
                        }}
                        defaultValue="0">
                        <option value="0" disabled hidden>Select A Category...</option>
                        {
                            cats.map(
                                (c) => {
                                    return (
                                        <option key={`gt--${c.id}`} value={`${c.id}`}>
                                            {`${c.label}`}
                                        </option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        description: currentGame.description,
                        title: currentGame.title,
                        year_released: parseInt(currentGame.year_released),
                        number_of_players: parseInt(currentGame.number_of_players),
                        estimated_time_in_minutes: parseInt(currentGame.estimated_time_in_minutes),
                        age_recommendation: parseInt(currentGame.age_recommendation),
                        categories: currentGame.categories
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Save</button>
        </form>
    )
}

