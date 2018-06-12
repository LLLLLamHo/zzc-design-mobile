const fs = require( 'fs' );
const path = require( 'path' );
const marked = require( 'marked' ); 

const filePath = path.join(__dirname, './test.md');

const fsContent = marked(fs.readFileSync(filePath, 'utf8'));
console.log(fsContent)