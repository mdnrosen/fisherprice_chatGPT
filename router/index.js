const express = require('express')
const router = express.Router()

const cc = require('../controllers/chatController')


router.get('/', (req, res) => {
    // res.json({ it: 'works' })
    console.log(req.text)
    res.render('main', { title: 'Home', text: req.text || ''})
})


router.post('/askChat', 
    cc.askChat,
    cc.renderMain

)

module.exports = router
