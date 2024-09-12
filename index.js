// const http = require('node:http')
// const path = require('node:path')

// const {foo:helperFoo} = require('./helpers/helper');
const readline = require("node:readline");

const foo =async () => {
    //HTTP
// const server = http.createServer((req, res) => {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({
//             data: 'Hello World!',
//         }));
//     });
//     server.listen(3000);

    //PATH
    // const pathToFile = __filename
    // console.log(pathToFile )
    // console.log(path.dirname(pathToFile))
    // console.log(path.extname(pathToFile))
    // console.log(path.basename(pathToFile))
    // console.log(path.parse(pathToFile))

    //ReadLine
    const rlInstance = readline.createInterface({
        input:process.stdin,
        process:process.stdout
    })
    const name = await rlInstance.question('Name?')
    console.log(`Your name is ${name}`)
    process.exit(name)
}

void foo();