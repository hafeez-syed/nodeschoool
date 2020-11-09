'use strict'
const { Transform } = require('stream')

const transformStream = new Transform({
    transform (chunk, encoding, next) {
        const data = chunk.toString().toUpperCase()
        this.push(data)
        next();
    }
})

process.stdin.pipe(transformStream).pipe(process.stdout);
