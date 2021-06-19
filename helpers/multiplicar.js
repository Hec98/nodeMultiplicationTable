const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 5) => {
//   let salida = '';
//   
//   console.log('===========================')
//   console.log(`        Tabla del ${base}  `)
//   console.log('===========================')
//   
//   for(let i = 1; i <= 10; i++) {
//     salida+= `${base} * ${i} = ${base * i}\n`;
//   }
//   
//   console.log(salida)
//   
//   // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//   //   if(err) throw err;
//   //   console.log(`tabla-${base}.txt creado`);
//   // });
//   
//   fs.writeFileSync(`tabla-${base}.txt`, salida);
//   console.log(`tabla-${base}.txt creado`);
// };


// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//   
//     let salida = '';
//   
//     console.log('===========================')
//     console.log(`        Tabla del ${base}  `)
//     console.log('===========================')
//   
//     for(let i = 1; i <= 10; i++) salida+= `${base} * ${i} = ${base * i}\n`;
//   
//     console.log(salida)
// 
//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     
//     if(base > 0) {
//       resolve(`tabla-${base}.txt`);
//     } else {
//       reject(`Base no valida ${base}`)
//     }
// 
//   });
// };

const crearArchivo = async(base = 5, listar, limite) => {
  try {
    let salida = '';
    let consola = '';    
    for(let i = 1; i <= limite; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
      consola += `    ${colors.cyan(base)} ${colors.red('*')} ${colors.cyan(`${i} = ${base*i}`)}\n`;
    } 
   
    if(listar) {
      console.log('==================')
      console.log(`   Tabla del ${base}  `.brightRed)
      console.log('==================\n')
      console.log(consola)
    } 
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creado`.green;

  } catch(err) {
    throw err;  
  }
};

module.exports = {
  crearArchivo
}
