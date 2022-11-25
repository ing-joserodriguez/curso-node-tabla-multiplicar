const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .options({
        'base': {
            alias: 'b',
            describe: 'Base de mi tabla de multiplicar',
            demandOption: true,
            type: 'number'
        },
        'listar': {
            alias: 'l',
            describe: 'Mostrar la tabla de multiplicar',
            default: false,
            type: 'boolean'
        }
        ,
        'hasta': {
            alias: 'h',
            describe: 'Hasta donde debo multiplicar la base',
            default: 10,
            type: 'number'
        }
    })
    .check((argv, options) => {
        if ( isNaN(argv.base) ) {
          throw new Error("La base tiene que ser un numero.")
        }
        return true;
    })
    .argv


module.exports = argv