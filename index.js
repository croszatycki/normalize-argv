function normalizeArgv(/* argv2 = '.', modifyProcessArgv = true */){
  const argv2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.';
  const modifyProcessArgv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  const argv = modifyProcessArgv ? process.argv : [].concat(process.argv);

  const launcher = argv.shift();

  if (!argv[0] || argv[0] && argv[0] !== argv2) {
    argv.unshift(argv2);
  }

  argv.unshift(launcher);
}

module.exports = normalizeArgv;
