const express = require("express")

// express app
const app = express() ;


// listen to requests
app.listen(3000) ;

app.get('/' , (req , res) => {
    // res.send('<p>hi to HOME page </p>') ;
    res.sendFile('./views/index.html' , { root : __dirname } )
 
})

app.get('/about' , (req , res) => {
    // res.send('<p>hi to ABOUT page</p>') ;
    res.sendFile('./views/about.html' , { root : __dirname } )
})

// redirect
app.get('about-me'  , (req , res) => {
    res.redirect('/about')
})

//404 page

app.use((req , res) => {
    res.status(404).sendFile('./views/404.html' , { root : __dirname } )
})