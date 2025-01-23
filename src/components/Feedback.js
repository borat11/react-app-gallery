import React, { useEffect, useState } from 'react';

const Feedback = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
      fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
    },[])
    console.log(reviews)
    return (
        <div>
            <h1>
               asdasds
            </h1>
        </div>
    )
}

export default Feedback

