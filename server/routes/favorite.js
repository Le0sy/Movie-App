const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

router.post('/favoriteNumber', (req, res) => {
    // mongoDB에서 favorite 수 가져오기
    Favorite.find({ "movieId": req.body.movieId })
        .exec((err, info) => {
            if (err) return res.status(400).send(err)
            // 프론트에 다시 리턴
            res.status(200).json({ success: true, favoriteNumber: info.length })
        })

})

router.post('/favorited', (req, res) => {
    // favorite을 눌렀는지 db에서 확인
    Favorite.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom })
        .exec((err, info) => {
            if (err) return res.status(400).send(err)

            let result = false;
            if (info.length !== 0) {
                result = true;
            }
            res.status(200).json({ success: true, favorited: result })
        })

})

router.post('/removeFromFavorite', (req, res) => {
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, doc })
        })
})

router.post('/addToFavorite', (req, res) => {
    // favorite을 눌렀는지 db에서 확인
    const favorite = new Favorite(req.body) // document instance
    favorite.save((err, doc) => {
        if (err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
})

module.exports = router;