import {exec} from "child_process"
import express from "express"
import bodyParser from 'body-parser'
import fs from 'fs'

const app = express()
const textParser = bodyParser.text()
const port = process.env.PORT || 8080

app.post("/", textParser, async (req, res) => {
    console.log("req.body:", req.body)
    const key = req.body
    if (!key) {
        console.error('Require key')
        res.status(400).send('Request body is insufficient')
        return
    }

    const keyFilePath = `/tmp/key-${(Math.random() + 1).toString(36).substring(7)}.json`
    fs.writeFile(keyFilePath, key, 'utf-8', (err) => {
        if (err) {
            console.error(err)
            throw err
        }
    })

    const command = `gcloud auth activate-service-account --key-file ${keyFilePath}`
    exec(command, (err, stdout) => {
        if (err) {
            console.error(err)
            throw err
        }
        exec('gcloud auth print-identity-token', (err, stdout) => {
            if (err) {
                console.error(err)
                throw err
            }
            console.log(stdout)
            res.status(200).send(stdout.slice(0, -1))
        })
    })
});

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});
