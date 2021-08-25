const argv = process.argv.slice(2);

const myfunc = function(argv) {
  if (argv.length === 0) {
    return console.log("you forgot to enter a number :)!");
  } else {
    for (let i = 0; i < argv.length; i++) {
      if (argv[i] >= 0 && !isNaN(argv[i])) {
        let delay = Number(argv[i] * 1000);
        setTimeout(() => process.stdout.write('\x07'), delay);
      }
    }
  }
};

myfunc(argv);
