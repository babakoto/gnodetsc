# rcli-tools

gnodetsc generate nodejs project with typescript 

### Install:
`npm i rcli-tools -g`

### Command 
`gnodetsc init [projectName] [port]`
![button](https://github.com/babakoto/rcli-tools/blob/master/button.PNG)

### server.ts 
    import express from 'express';
    
    export default class Server {
        constructor(private port:number){}
    
        public start():void{
            const app = express();
            app.get("/", (req,res)=>{
                res.send("Hello world");
            });
            app.listen(this.port,()=>{
                console.log(`Server started port:${this.port}`)
            })
        }
    
    }
    

#### index.ts
    import Server from "./server";
    
    let server = new Server(${port});
    server.start();
 