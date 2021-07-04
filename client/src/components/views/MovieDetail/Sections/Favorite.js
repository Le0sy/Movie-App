import React, { useEffect } from 'react';
import Axios from 'axios';

function Favorite() {

    /*useEffect(() => {
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if (response.data.success) {

                } else {
                    alert('좋아요 정보를 가져오는데 실패했습니다.')
                }
            })
    }, [])*/


    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite