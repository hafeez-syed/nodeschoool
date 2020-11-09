'use strict'
const concat = require('concat-stream')

const concatStream = concat(data => {
    const reversedData = data
    .toString()
    .split('')
    .reverse()
    .join('')

    process.stdout.write(reversedData)
})

process.stdin.pipe(concatStream)
