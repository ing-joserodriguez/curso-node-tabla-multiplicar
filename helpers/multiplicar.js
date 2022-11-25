const fs = require('fs');

const crearArchivo = ( base = 5, listar, hasta ) => {

    return new Promise ( (resolve, reject) => {

        let salida = '';

        try {

            for (let n = 1; n <= hasta; n++) { 
                salida += `${base} x ${n} = ${base * n}\n`;
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
                if (err) throw err;
            });*/

            if( listar ){
                console.log("================================");
                console.log(`Tabla de multiplicar del ${base}`);
                console.log("================================");
                console.log(salida);
            }

            resolve( `tabla-${base}.txt` );
            
        } catch (error) {

            reject( `${error}` );
            
        }

    });




}

module.exports = { crearArchivo }