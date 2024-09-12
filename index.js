const http = require('node:http')
const path = require('node:path')
const fsPromises = require('node:fs/promises')
const  fs= require('node:fs')
 const readLine = require('node:readline/promises')
 const EventEmitter = require('events')

const {foo:helperFoo} = require('./helper/helper');

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
    // const rlInstance = readline.createInterface({
    //     input:process.stdin,
    //     process:process.stdout
    // })
    // const name = await rlInstance.question('Name?')
    // console.log(`Your name is ${name}`)
    // process.exit(name)

    //FS
    // const pathToFile  = path.join(__dirname,'test.txt')
    // await fsPromises.writeFile(pathToFile,'hello world\n')
    // const data = await fsPromises.readFile(pathToFile,'utf-8')
    // console.log(data)
    // await fsPromises.mkdir(path.join(__dirname,'new-folder'),{recursive:true})
    // await fsPromises.appendFile(pathToFile,'Some new data')
    // await fsPromises.mkdir(path.join(__dirname,'new-folder','another-folder'),{recursive:true})
    // await fsPromises.rm(path.join(__dirname,'new-folder'),{recursive:true})
    // await fsPromises.unlink(pathToFile)
    // await fsPromises.rename(pathToFile,path.join(__dirname,'new-folder','new-test.txt'))
    // await fsPromises.copyFile(pathToFile,path.join(__dirname,'new-folder','new-test.txt'))
    // const stat = await fsPromises.stat(pathToFile)
    // console.log(stat)

    //Streams
    // const pathToFile  = path.join(__dirname,'25900.pdf');
    // const readStream = fs.createReadStream(pathToFile)
    // const writeStream = fs.createWriteStream(path.join(__dirname , 'new-bif-file.pdf'))
    // readStream.on('data',(chunk)=>{
    //     console.log('chunk',chunk.length)
    //     writeStream.write(chunk)
    // })
    // readStream.pipe(writeStream)

    //Events
    // const emitter = new EventEmitter();
    //     emitter.on('event',() => {
    //         console.log('Event happened')
    //     })
    // emitter.emit('event')
}

void foo();