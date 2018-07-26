var http = require('http');
var fs = require('fs');
var url = require('url');




http.createServer(function(request,response){
    if (url.parse(request.url).pathname==="/Home"){
        fs.readFile("./home.html",(err,data)=>{
            if (err)
            {
            response.writeHead(404);
            response.write('Page Not Found')
            }
            else
            {
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(data);
            }
            response.end();
        })
    }
    else{
        if (url.parse(request.url).pathname==="/About"){
            fs.readFile('./about.html',(err,data)=>{
                if (err)
                {
                response.writeHead(404);
                response.write('Page Not Found')
                }
                else
                {
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(data);
                }
                response.end();
            })
        }
        else{
                response.writeHead(404);
                response.write('Page Not Found')
                response.end();
            }
    
        }
    
    
}).listen(3000);
