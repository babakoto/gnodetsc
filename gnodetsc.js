#!/usr/bin/env node
const util = require('./utils/generator');
const fs = require('fs-extra');
const [,, ... args]=process.argv;
const { exec } = require('child_process');
let createFile = (command, data)=>{
    fs.outputFile(command, data)
        .then(()=>{
        })
        .catch((error)=>{console.log(error)})
};

if(args[0]!== undefined && args[0] ==="init"){
    if(args[1]!== undefined && typeof args[1]==="string"){
        createFile(`${args[1]}/package.json`,util.createPackageJson(args[1]));
        createFile(`${args[1]}/src/server.ts`,util.createServer(args[2]));
        createFile(`${args[1]}/src/index.ts`, util.createIndex(args[2]));
        createFile(`${args[1]}/tsconfig.json`, util.createTsConfig());
        createFile(`${args[1]}/dist/index.js`, util.createDistIndexJs(args[2]));
        createFile(`${args[1]}/dist/server.js`, util.createDistServerJs());

        function initNpm() {
            exec('npm install',(error, out,stderr)=>{
                if(error){
                    console.log(error);
                }
                console.log(out);
            });
        }
        setTimeout(initNpm, 5000,()=>{
            console.log("Start ...");
        });

    }else {
        console.log("Name project required")
    }
}else {
    console.log("init required");
}