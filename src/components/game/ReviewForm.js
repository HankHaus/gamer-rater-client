import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"


export const ReviewForm = () => {
    const history = useHistory()
    const { gameId } = useParams()



    const [review, setReview] = useState({
        review_body: ""
    })



    const changeReview = (e) => {
        // TODO: Complete the onChange function
        setReview({
            review_body: e.target.value

        })
    }

    
    
    const createReview = (r) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(r)
        };
        return fetch(`http://localhost:8000/reviews?game=${gameId}`, requestOptions)
        .then(response => response.json())
    }
    
    
    
    const submitReview = (e) => {
        return createReview(review)
    }



    return (
        <>
            <textarea
                id="review"
                value={review.review_body}
                onChange={changeReview}></textarea>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => { submitReview().then(history.push({ pathname: `/games/${gameId}` })) }}
            >Save</button>
        </>
    )
}