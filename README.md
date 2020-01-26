# rnodetsc

gnodetsc generate nodejs project with typescript 

### Step 1
`gnodetsc init myprojet 8080`

### Step 2 
`cd myprojet` 

### Step 3 : install dependencies
`npm install`  

### Step 4 : run server
`npm run dev`  


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
 