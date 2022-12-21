const express = require('express')
const app = express()
const port = 3000

app.get('/', (request,response) => {
    response.send('20 + 50 = 70')
})

app.listen(port,() => {
console.log (`El servidor esta encendido en http://localhost:${port}`)
});