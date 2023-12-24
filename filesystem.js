const path = require('path');
const fs = require('fs');


// fs.mkdirSync(path.resolve(__dirname, 'geeks','geeks'))
// fs.writeFile(path.resolve(__dirname, 'geeks',  'geeks', 'text.txt'), '1232233', (err) => {
//     if(err) {
//         console.error(err)
//     }
// });

// fs.appendFile(path.resolve(__dirname, 'geeks', 'geeks', 'text.txt'), 'hello world', (err) => {
//     if(err) {
//         console.error(err)
//     }
// });


//  writeFileAsync = async () => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(path.resolve(__dirname, 'geeks', 'geeks', 'text2.txt'), '\n async 1', (err) => {
//             if(err) {
//                 return reject(err.message);
//             }
//             resolve();
//         })
//     })
// }
//
//
//
// const appendFileAsync = async () => {
//     return new Promise((resolve, reject) => {
//         fs.appendFile(path.resolve(__dirname, 'geeks', 'geeks', 'text2.txt'), '\n async 2', (err) => {
//             if(err) {
//                 return reject(err.message);
//             }
//             resolve();
//         })
//     })
// }
//
// writeFileAsync().then(() => {
//     appendFileAsync();
// }).then(() => {
//     appendFileAsync();
// }).catch((err) => {
//     console.log(err);
// })
//


// const readFileAsync = async (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, {encoding: 'utf-8'}, (err, file) => {
//             if(err) {
//                 return reject(err.message);
//             }
//             resolve(file);
//         })
//     })
// }
//
// readFileAsync(path.resolve(__dirname, 'geeks', 'geeks', 'text2.txt')).then((res) => {
//     console.log(res);
// })


const createFileAsync  = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if(err) {
                return reject(err.message);
            }
            resolve();
        })
    })
};

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, file) => {
            if(err) {
                return reject(err.message);
            }
             resolve(file);
        })
    })
}

const removeFileAsync = (path) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if(err) {
                return reject(err.message)
            }
            resolve();
        })
    })
}

createFileAsync(path.resolve(__dirname, 'task.txt'), 'this string contains five words')
    .then(() =>
        readFileAsync(path.resolve(__dirname, 'task.txt')))
    .then((file) => file.split(' ').length)
    .then((length) =>
        createFileAsync(path.resolve(__dirname, 'task2.txt'), `${length}`)
)
    .then(() => removeFileAsync(path.resolve(__dirname, 'task.txt')))
    .catch((err) => {
    console.log(err);
})