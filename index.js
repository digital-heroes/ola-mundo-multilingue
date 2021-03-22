const express = require('express')
const app = express()

const port = 3000

app.get('/:lang', (req, res) => {
    const LANG_HELLO = {
        'ptBR': 'Olá Mundo',
        'enUS': 'Hello World',
        'es': 'Hola Mundo'
    }
    res.send(LANG_HELLO[req.params.lang])
})

app.listen(port, () => {
    console.log(`Aplicação hello world rodando na porta ${port}`)
})