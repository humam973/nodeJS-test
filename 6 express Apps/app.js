const express = require("express")

// express app
const app = express() ;

// register view engine
app.set('view engine' , 'ejs');

//the diffult folder that express and ejs will look for the files it 'views' folder but if i changed my files folder name i have to 
// tell ejs and express about that like belwo
// app.set('views' , 'bla-bla-bla-bla')

// listen to requests
app.listen(3000) ;

const notes = [
    {title : 'Project Meeting Summary' , snippet : 'Key updates and action items from today`s project meeting.'} ,
    {title : 'Grocery List for the Week' , snippet : 'Milk, eggs, bread, chicken, vegetables, fruits, pasta.'} ,
    {title : 'GIdeas for Blog Posts' , snippet : 'Healthy eating tips, Japan travel guide, productivity hacks.'} ,
    {title : 'JavaScript Basics Study Notes' , snippet: 'Variables, functions, loops, and DOM manipulation.'} ,
    {title : 'Project Meeting Summary' , snippet : 'Key updates and action items from today`s project meeting.'} ,
    {title : 'Grocery List for the Week' , snippet : 'Milk, eggs, bread, chicken, vegetables, fruits, pasta.'} 
]
app.get('/' , (req , res) => {
    // res.send('<p>hi to HOME page </p>') ;
    // res.sendFile('./views/index.html' , { root : __dirname } )
    res.render('index' , {title : 'home' , notes})
})

app.get('/about' , (req , res) => {
    // res.send('<p>hi to ABOUT page</p>') ;
    // res.sendFile('./views/about.html' , { root : __dirname } )
    res.render('about' , {title : 'about' , notes})
})

app.get('/notes/create' , (req , res) => {
    // res.send('<p>hi to ABOUT page</p>') ;
    // res.sendFile('./views/about.html' , { root : __dirname } )
    res.render('createNote' , {title : 'creating' , notes})
})

// // redirect
// app.get('about-me'  , (req , res) => {
//     res.redirect('/about')
// })

//404 page

app.use((req , res) => {
    // res.status(404).sendFile('./views/404.html' , { root : __dirname } )
    res.status(404).render('404' , {title : '404' , notes})
})