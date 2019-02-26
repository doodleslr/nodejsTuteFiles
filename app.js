// EVENT EMITTERS-------------------------------------------------------------------------------
// const EventEmitter = require('events');

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
// }
// let pedro = new Person('Pedro');
// let christina = new Person('Christina');

// christina.on('name', ()=>{
//     console.log('her name is ' + christina.name);
// });
// pedro.on('name', ()=>{
//     console.log('his name is ' + pedro.name);
// });
// pedro.emit('name');
// christina.emit('name');


// READLINE SYSTEM-----------------------------------------------------------------------------
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// var num1 = Math.floor((Math.random() * 10) + 1);
// var num2 = Math.floor((Math.random() * 10) + 1);
// var answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2}?\n`,
//     // ()=> is the same as function(){} from within a method
//     // unable to use 'this' however
//     // function(userInput){
//     //     console.log(userInput);
//     // }
//     (userInput)=> {
//         if(userInput.trim() == answer){
//             rl.close();
//         } else {
//             rl.setPrompt('Incorrect, please try again.\n');
//             rl.prompt();
//             rl.on('line',(userInput)=>{
//                 if(userInput.trim() == answer){
//                     rl.close();
//                 } else {
//                     rl.setPrompt(`${userInput} is incorrect, keep trying!\n`);
//                     rl.prompt();
//                 }
//             });
//         }
//     }
// )

// rl.on('close', ()=>{
//     console.log('Correct!');
// });

// FILE SYSTEMS--------------------------------------------------------------------------------
// FS IS FILE SYSTEM MODULE REQUIRED FOR I/O ON SYSTEM FILES
// const fs = require('fs');

// fs.writeFile('example.txt', 'this is a new file.', (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('file created');
//         fs.readFile('example.txt', 'utf8', (err, file)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });

// fs.rename('example.txt', 'buttcheeks.txt', (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('file renamed');
//     }
// });

// fs.appendFile('buttcheeks.txt', ' THIS IS MORE TEXT', (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('file appended.');
//         fs.readFile('buttcheeks.txt', 'utf8', (err, file)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });

// fs.unlink('buttcheeks.txt', (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('file deleted.');
//     }
// });

// fs.mkdir('tute folder', (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('folder created');
//         fs.writeFile('./tute folder/exm.txt', 'farts', (err)=>{
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log('file created');
//             }
//         });
//     }
// });

// fs.unlink('./tute folder/exm.txt', (err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log('tute folder single file deleted');
//         fs.rmdir('tute folder', (err)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log('tute folder deleted');
//             }
//         });
//     }
// });

// fs.readdir('tute folder', (err, files)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         for(let file of files){
//             fs.unlink('./tute folder/' + file, (err)=>{
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(file + ' deleted');
//                 }
//             });
//         }
//         fs.rmdir('tute folder', (err)=>{
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log('folder and all file contents deleted.');
//             }
//         });
//     }
// });


// READABLE AND WRITABLE STREAMS---------------------------------------------------------------
// USE TO READ SIGNIFICANTLY LARGE FILES
// USE .readFile('filename', (err, file)=>{etc}) to read smaller files
// const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt');
// LONG METHOD
// readStream.on('data', (chunk)=>{
//     writeStream.write(chunk);
// });
// SHORT PIPE METHOD
// readStream.pipe(writeStream);
// PIPES AND PIPE CHAINING
// SEND READABLE STREAMS TO A WRITABLE STREAM IN SHORTHAND
//--
// WRITES A COMPRESSED FILE WITH GZIP
// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);
//--
// READS FROM COMPRESSED FILE AND WRITES TO NORMAL FILE
// const fs = require('fs');
// const zlib = require('zlib');
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz');
// const writeStream = fs.createWriteStream('exampleunzipped.txt');
// readStream.pipe(gunzip).pipe(writeStream);

// HTTP MODULE----------------------------------------------------------------------------------
// CREATING HTTP WEB SERVER
// HTTP MODULE IS REQUIRED TO CREATE HTTP SERVERS
// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.write('Hello Daniel');
//         res.end();
//     } else {
//         res.write('using another domain');
//         res.end();
//     }
// });
// listens for request on this port 'localhost:3000'
// server.listen('3000');
//--
// SERVING STATIC FILES
// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./depot/divinebeast.jpg');
//     res.writeHead(200, {'Content-type': 'image/jpg'});
//     // content-type is 'text/html' 'application/json' 'image/jpg'
//     // HTTP STATUS CODES 200 IS REQUEST SUCCESSFUL EG; 404 IS NOT FOUND, 403 IS FORBIDDEN

//     readStream.pipe(res);
// }).listen(3000);

// CREATING PACKAGE.JSON FILE--------------------------------------------------------------------
// npm init
// INSTALLING PACKAGES (REUSABLE CODE THAT CAN BE INCLUDED IN PROJECTS)
// www.npmjs.com
// > npm i lodash
// const _ = require('lodash');
// let lodashExample1 = _.fill([1,2,3,4,5], "something else", 2, 4);
// let lodashExample2 = _.kebabCase('THIS IS ALL KEBABBED');
// let lodashExample3 = _.lowerCase('THIS IS ALL UPPER CASE and this is lower case');
// console.log(lodashExample1 + '\n' + lodashExample2 + '\n' + lodashExample3);
//--
// > npm uninstall lodash
//--
// SEMANTIC VERSIONING
// STANDARD VERSIONING FOR NODEJS PACKAGES, HELPS UNDERSTAND CHANGES IN UPDATED PACKAGE
// IN package.json USING 'LODASH ^4.17.11' major.minor.patch
                                            //^ 4.x.x ONLY minor or patch updates
                                            //~ 4.17.x ONLY patch UPDATES
                                            //none 4.14.11 ONLY CURRENT VERSION

// USING express WEB FRAMEWORK------------------------------------------------------------------
// www.expressjs.com
//  npm init --yes  'TO SKIP ALL INIT CONFIGS'
// npm i express
// USING GET, ROUTE PARAMS AND QUERY STRINGS
// const express = require('express');
// const app = express();
// app.get('/', (req, res)=>{
//     res.send('Hello ME!');
// });
// app.get('/example', (req, res)=>{
//     res.send('example page');
// });
// app.get('/example/:name/:age', (req, res)=>{
//     console.log(req.params);    // ROUTE PARAMETER
//     console.log(req.query);     // QUERY STRING PARAMETER
//                                 // append to URL ?someparam=something&sort=alphabetical
//                                 // ROUTE IS FOR ESSENTIAL, QUERY STRING IS FOR OPTIONAL
//     res.send(req.params.name + ' : ' + req.params.age);
// });
// app.listen(3000);
//--
// SERVING STATIC FILES
// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static('expressDepot'));
// ALLOWS http://localhost:3000/divinebeast.jpg and etc but compromises folder security
// USES ALIAS FOR FOLDER FOR ADDED SECURITY
// app.use('/public', express.static(path.join(__dirname, 'expressDepot')));
// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'expressDepot', 'index.html'));
// });
// app.listen(3000);
//1:54:38