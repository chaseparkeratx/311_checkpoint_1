const express = require('express')
const app = express()
const port = process.env.PORT || 44

app.use(express())

app.get('/', (req, res) => res.send('default route'))


app.listen(port, () => {
  console.log('app is listening on port:', port)
})

