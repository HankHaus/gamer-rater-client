export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getCats = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (game) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(game)
    };
    return fetch('http://localhost:8000/games', requestOptions)
        .then(response => response.json())
}

export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}