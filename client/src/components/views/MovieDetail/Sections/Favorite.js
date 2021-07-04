import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Favorite(props) {

    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movietitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    useEffect(() => {

        let variables = {
            userFrom,
            movieId
        }

        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                setFavoriteNumber(response.data.favoriteNumber)
                if (response.data.success) {
                } else {
                    alert('좋아요를 누른 사람 수를 가져오는데 실패했습니다.')
                }
            })

        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('좋아요 정보를 가져오는데 실패했습니다.')
                }
            })

    }, [])


    return (
        <div>
            <button>{Favorited ? " Not Favorite" : "Add to Favorite "} {FavoriteNumber}</button>
        </div>
    )
}

export default Favorite