const fs = require('fs')


// 1.reading files 

// fs.readFile('./randomText.txt' , (err , data) => {
//     if (err) {
//         console.log(err)
//     } {
//         console.log(data.toString())
//     }
// })

// console.log("this is will be loged in console first")

// 2.writing files 

// fs.writeFile('./text1.txt' , 'this text or string was made by node writeFile modules',() => {
//     console.log('file wad written')
// })


// 3.directores

// making folder and if this folder dose existing and will console log the err

// fs.mkdir('./new folder' , (err) => {
//     if (err) {
//         console.log(err)
//     }{
//         console.log('folder has been created successfully')
//     }
// })

// making a folder and if the folder existing will be deleted enisted

// if (!fs.existsSync('./new folder')) {
    
//     fs.mkdir('./new folder' , (err) => {
//         if (err) {
//             console.log(err)
//         }{
//             console.log('folder has been created successfully')
//         }
//     })
//     } else {
//         fs.rmdir('./new folder' , (err) => {
//             if (err) {
//                 console.log(err)
//             }{
//                 console.log('folder with the same name existing for that reason the existing folder has been deleted successfully')
//             }
//         })
//     }



// deleting files

// if (fs.existsSync('./folderWillbeDeleted.txt')) {
//     fs.unlink('./folderWillbeDeleted.txt' , (err) => {
//         if (err) {
//             console.log(err)
//         }{
//         console.log('file deleted successfully') 
//         }
//     } 
//     )
// }