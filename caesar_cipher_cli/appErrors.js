function wrongPathError() {
  process.stderr.write('You specify wrong file paths! Maybe they are does not exists or there is no access to them! Please try again with another file paths!');
  process.exit(1);
}

function wrongShiftArgument() {
  process.stderr.write('error: The argument <shift> of option shift must be an integer only!');
  process.exit(1);
}

function wrongActionArgument () {
  process.stderr.write('error: The argument <action> of option action must be an "encode" or "decode" only!');
  process.exit(1);
}

module.exports = {
  wrongPathError,
  wrongActionArgument,
  wrongShiftArgument
}