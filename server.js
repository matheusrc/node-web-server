const express = require('express')

var app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1>')
    res.send({
        name: 'Matheus',
        likes: ['running', 'gaming']
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/bad', (req, res) => {
    res.send('<h1>ERROR</h1>')
    res.console.error('ERROR PAGE!');
    

})

app.listen(3000,() => {
    console.log('Server is up on port 3000!')
})