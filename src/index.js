const express = require('express')
const { LoremIpsum } = require('lorem-ipsum')

const app = express()
const port = 3000

app.get('/', (req, res) => {

    const lorem = new LoremIpsum();
    const qnt = () => {

        if(req.query.qnt) {
            return parseInt(req.query.qnt);
        }

        return undefined;
    }

    console.log(qnt);

    if(req.query.type === 'words') {
        return res.send({
            "text": lorem.generateWords(qnt())
        })
    }

    if(req.query.type === 'sentences') {
        return res.send({
            "text": lorem.generateSentences(qnt())
        })
    }

    if(req.query.type === 'paragraphs') {
        return res.send({
            "text": lorem.generateParagraphs(qnt()).replace("\n", "\\n")
        })
    }

    res.status(422).send({
        "error": "Type parameter (with value of words, sentences or paragraphs) is required"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
