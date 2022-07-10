const express = require('express')
const path = require('path')

const app = express()

// middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     console.log('index fetched')
//     res.sendFile(path.resolve(__dirname,'./nav-bar/index.html'))
// })

app.all('*',(req,res) => {
    res.send('<h1>resource not found</h1>')
})

app.listen(8000,()=>{
    console.log('app listening on 8000...')
})