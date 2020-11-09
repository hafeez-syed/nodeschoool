const { createReadStream } = require('fs')

const file = process.argv[2]
createReadStream(file).pipe(process.stdout)