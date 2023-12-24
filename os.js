 const os = require('os');
const cpus = os.cpus();
const cluster = require('cluster');



// cpus.forEach((cpu) => {
//     if(cluster.isPrimary) {
//         cluster.fork();
//     } else {
//         console.log(process.pid)
//
//         setInterval(() => {
//             console.log(`${process.pid} still working`)
//         })
//     }
//
// })
//
//
//
//

 if(cluster.isPrimary) {
     for(let i = 0; i < os.cpus().length - 2; i++) {
            cluster.fork();
            cluster.on('exit', () => {
                console.log(`${process.pid} worker shut down`);
                cluster.fork();
            })
     }
 } else {
     console.log(`${process.pid} запущен`);

     setInterval(() => {
         console.log(`${process.pid} worker still working`)
     })
 }