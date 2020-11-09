const { Readable } = require('stream')
const content = process.argv[2]
const readable = new Readable({
    read(chunk) {
        console.log('chunk: ', chunk)
    }
})

readable.push(content);
readable.push(null);

readable.pipe(process.stdout)
