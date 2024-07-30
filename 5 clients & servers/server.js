const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req , res) => {

    res.setHeader('contype-Type', 'text/plain')

// the _ its lodash and randome method selecting randome num betwen the velue that i specified
    console.log(_.random(20 ,30))
// .once method make thing run only one time 
    const fun = _.once(() => {
        console.log('Helloooo')
    }
)
fun()
fun()
fun()



    let path = './view/'

    switch(req.url){
        case '/':
        path += 'index.html' ;
        res.statusCode = 200 ;
        break ;
        case '/about': 
        path += 'about.html' ;
        res.statusCode = 200 ;
        break ;
        case '/about-me': 
        res.statusCode = 301 ;
        res.setHeader('Location' , '/about')
        res.end() ;
        break ;
        default : 
        path += '404.html' ;
        res.statusCode = 404;
        break ;
    }

    fs.readFile(path, (err , data) => {
        if(err){
            console.log(err)
            res.end()
        } {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000 , 'localhost' , () => {
    console.log('listening to requst from 3000 port')
})