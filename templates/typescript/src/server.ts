import * as express from 'express'
 
const app = express()
const port = 8088
 
app.get('/', (req, res) => {
  res.send('Hello world!')
})
 
app.listen(port, () => {
  console.log(`Listening at ${port}`)
})
