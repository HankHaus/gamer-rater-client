import React from "react"
import { Route } from "react-router-dom"
import { GameDetails } from "./game/GameDetails.js"
import { GameForm } from "./game/GameForm.js"
import { GameList } from "./game/GameList.js"
import { GameEditForm } from "./game/UpdateGame"
import { ReviewForm } from "./game/ReviewForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/games">
                <GameList />
            </Route>
            <Route exact path="/games/:gameId(\d+)">
                <GameDetails />
            </Route>
            <Route exact path="/games/new">
                <GameForm />
            </Route>
            <Route exact path="/games/:gameId(\d+)/review">
                <ReviewForm />
            </Route>
            <Route exact path="/games/edit/:gameId(\d+)">
                <GameEditForm />
            </Route>
        </main>
    </>
}