var fs = require('fs')

var copyNotes = fs.readFileSync(process.argv[2], 'utf-8')

fs.writeFileSync('destination.txt', copyNotes)

console.log(copyNotes)


var fs = require('fs')
var sourceFileName = process.argv[2]
var targetFileName = process.argv[3]

