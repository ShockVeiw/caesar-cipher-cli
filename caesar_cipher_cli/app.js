const fs = require('fs');
const { program } = require('commander');
const caesarCipher = require('./caesarCipher');
const { wrongPathError, wrongActionArgument, wrongShiftArgument } = require('./appErrors');
const { pipeline, Transform } = require('stream');

program
  .storeOptionsAsProperties(false)
  .version('0.0.1')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .requiredOption('-s, --shift <number>', 'a shift')
  .requiredOption('-a, --action <action>', 'an action encode/decode')
  .parse(process.argv);
  
const inputFile = program.opts().input;
const outputFile = program.opts().output;
const shift = isNaN(+program.opts().shift) ? wrongShiftArgument() : +program.opts().shift;
const action = ['encode', 'decode'].includes(program.opts().action) ? program.opts().action : wrongActionArgument();

function getReadStream() {
  if (!inputFile) return process.stdin;
  return fs.createReadStream(inputFile);
}

function getWriteStream() {
  if (outputFile && !fs.existsSync(outputFile)) wrongPathError();
  else if(!outputFile) return process.stdout;
  return fs.createWriteStream(outputFile, { flags: 'a' });
}

function getTransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
     const data = caesarCipher(chunk.toString(), shift, action);
     callback(null, data);
    }
  });
}

pipeline(
  getReadStream(),
  getTransformStream(),
  getWriteStream(),
  (err) => {
    if (err) console.log('Something went wrong!');
    console.log('Success! Checkout your output file!');
  }
);