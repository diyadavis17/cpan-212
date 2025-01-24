const http = require("http")
const app = http.createServer((req, res)=>{
    if(req.url ==="/"){
        res.end("hello from home")
    } else {
        res.end("page not found")
    }
})
app.listen(3000)