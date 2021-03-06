const util = {
    createPackageJson: (nameProjet) => {
        return `
{
    "name": "${nameProjet}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "npx tsc && node dist/index.js",
        "test": "echo \\"Error: no test specified\\" && exit 1",
        "dev": "ts-node-dev --clear ./src/index.ts "
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "@types/express": "^4.17.2",
        "@types/node": "^13.5.0",
        "concurrently": "^5.0.2",
        "express": "^4.17.1",
        "ts-node-dev": "^1.0.0-pre.44"
    },
    "devDependencies": {
        "typescript": "^3.7.5"
    }
}`;
    },
    createServer: (port) => {
        return `
import express from 'express';

export default class Server {
    constructor(private port:number){}

    public start():void{
        const app = express();
        app.get("/", (req,res)=>{
            res.send("Hello world");
        });
        app.listen(this.port,()=>{
            console.log("Server started port:${port}")
        })
    }

}
`
    },
    createIndex: (port) => {
        if (port === undefined) {
            return `
import Server from "./server";

let server = new Server(8080);
server.start();
`
        } else {
            return `
import Server from "./server";

let server = new Server(${port});
server.start();
`
        }

    },
    createTsConfig:()=>{
        return `
{
    "include": ["./src/**/*"],
    "compilerOptions": {
      "outDir": "dist",
      "module": "commonjs",
      "target": "es6",
      "strict": true,
      "esModuleInterop": true
    },
    "exclude": [
      "node_modules"
    ]
  }
        `
    },
    createDistIndexJs:(port)=>{
        return `
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
let server = new server_1.default(${port});
server.start();
        `
    },
    createDistServerJs:()=>{
        return`
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express_1.default();
        app.get("/", (req, res) => {
            res.send("Hello world");
        });
        app.listen(this.port, () => {
            console.log("Server started port:undefined");
        });
    }
}
exports.default = Server;
        `
    }
};

module.exports = util;