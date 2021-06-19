const { crearArchivo  } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(argv);
// console.log('base: yargs', argv.base);

// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')
// console.log(base)

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo, '+'))
  .catch(err => console.log(err));
