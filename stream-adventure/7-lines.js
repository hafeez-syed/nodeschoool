'use strict'
const { Transform } = require('stream')
const split2 = require('split2')

let count = 0
const transformStream = new Transform({
    transform (chunk, encoding, next) {
        const stringData = chunk.toString()
        if (count++ % 2) {
            this.push(stringData.toUpperCase() + '\n')
        } else {
            this.push(stringData.toLowerCase() + '\n')
        }
        next();
    }
})

process.stdin
    .pipe(split2())
    .pipe(transformStream)
    .pipe(process.stdout)
