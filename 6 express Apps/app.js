const express = require("express")
const morgan = require('morgan')
const mongoose = require('mongoose')
const Note = require('./models/note')


// express app
const app = express() ;

// connect to mogodb 

const dbURI = "mongodb+srv://humamTest:rw4f33LReOsBINla@nodejstest.zvtixsd.mongodb.net/node-note-test?retryWrites=true&w=majority&appName=nodeJstest"
mongoose.connect(dbURI)

 .then((result) => {
    console.log('hey this is working you officially connected to the database') 
    // listen to requests
    app.listen(3000) ;
})
 .catch((err) => console.log(err))

// register view engineç
app.set('view engine' , 'ejs');

//the diffult folder that express and ejs will look for the files it 'views' folder but if i changed my files folder name i have to 
// tell ejs and express about that like belwo
// app.set('views' , 'bla-bla-bla-bla')

// // use method made whatever the func. inside run every time a request made

// app.use((req , res , next) => {
//     console.log('new request made :')
//     console.log('host : ' , req.hostname)
//     console.log('path : ' , req.path)
//     console.log('method : ' , req.method)
// // the next method tells the use method that after whatever the func. that you run let the server contune read the code
//     next()
// })

// app.use((req , res , next) => {
//     console.log('this is the next meddleware')
//     next()
// })

// 3 part meddlware & static files
app.use(express.static('public'))
app.use(morgan('dev'))

// mongoose and mongo sandbox routes

// 1 creat note 

// app.get('/create-note' , (req , res) => {
//     const note = new Note({
//         title : 'SECOND NOTE' ,
//         noteSnippet : 'this is my firs note in db' ,
//         noteContant : 'hi this is my first note that i send to db , i am so excited for this :)'
//     })

//     note.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => console.log(err))
// })

// 2 get all note

// app.get('/all-notes' , (req , res) => {
//     Note.find() 
//         .then((result) =>{
//             res.send(result)
//         })
//         .catch((err) => console.log(err))
// })

// 3 get a single note

// app.get('/singel-note' , (req , res) => {
//     Note.findById("66b373a0a7a0d372a16ae13d") 
//         .then((result) =>{
//             res.send(result)
//         })
//         .catch((err) => console.log(err))
// })

app.get('/' , (req , res) => {
   res.redirect('/notes')
})

app.get('/about' , (req , res) => {
    // res.send('<p>hi to ABOUT page</p>') ;
    // res.sendFile('./views/about.html' , { root : __dirname } )
    res.render('about' , {title : 'about' })
})

app.get('/notes' , (req , res) => {
    Note.find().sort({ createdAt : -1 })
        .then((result) => {
            res.render('index.ejs' , {title : 'All notes' , notes : result})
        })
        .catch(err => console.log(err))    
})

app.get('/notes/create' , (req , res) => {
    // res.send('<p>hi to ABOUT page</p>') ;
    // res.sendFile('./views/about.html' , { root : __dirname } )
    res.render('createNote' , {title : 'creating' })
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