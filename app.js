
const express = require('express')
const app = express()
const port = 4000
const User = require('./user.model')

////////////
//configs//
//////////
require('./configs/passport.config')(app)
require('./configs/mongoose.config')

app.get('/', (req, res) => {
  res.send('Hello Worlquepasad!')
})
app.get('/starship', (req, res, next) => {
	console.log('has solicitado la starchip');
	User
	.find()
	.then(response => res.json(response))
	.catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
