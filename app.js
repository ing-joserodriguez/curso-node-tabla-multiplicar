const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
/*
    "process.argv" 
    retorna:
    [
        'C:\Program Files\nodejs\node.exe',
        'C:\Users\xjose\Desktop\Node\03-bases-node\app',
        '--base=5'
    ]

    const [ , , arg3 = '--base=5'] = process.argv;
    const [ , base] = arg3.split('=');
*/

console.clear();

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado!') )
    .catch( err => console.log(err) );