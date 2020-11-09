'use strict'
const { Writable } = require('stream')

const writable = new Writable({
    write(chunk, encoding, next) {
        console.log(`writing: ${chunk.toString()}`);
        next(null);
    }
})

process.stdin.pipe(writable);
