import express from 'express'

const app = express()

app.get('/teste', (req, res) => {
    res.send('Ok, deu bom :)')
})

app.listen(3000)
