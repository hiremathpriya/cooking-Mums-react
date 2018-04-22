const express = require('express')
const router = express.Router()

router.post('/', function (req, res) {
//   res.json(db.getRegistrations())
    console.log('Hi')
    res.send('Hi')
})

router.get("/", (req, res) => {

    console.log('hi');
    res.send('hello');
})

// router.post('/', function (req, res) {
//   db.saveWidget(req.body)
//   // Normally saveWidget would be async and you'd
//   // have to sendStatus in the .then, but in this
//   // implementation, the data is stored in server
//   // memory and is done synchronously.
//   res.sendStatus(200)
// })

module.exports = router