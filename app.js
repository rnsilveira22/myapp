const express = require('express')
const app = express()
const port = 3000

app.get('/update', (req, res) => {
    res.send({texto: 'Botijão 13Kgs!',
    preco: 'R$ 82.00'})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/update`)
})