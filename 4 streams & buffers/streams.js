const fs = require('fs')

const readStream = fs.createReadStream('./bigDatafile.txt' , {encoding : 'utf8'} )
// the encoding utf8 represent that the data will be streamed as it is with out useing toString method
const writeStream = fs.createWriteStream("./writeData.txt")

// this is a long way 
// readStream.on('data' , (chunk) => {
//     console.log('-----NEW CHUNK-----')
//     console.log(chunk)
//     writeStream.write('\n----NEW CUNK----\n')
//     writeStream.write(chunk)
// })


// this is a short way 'piping' that mean take data from readStream to writeStream
readStream.pipe(writeStream)

