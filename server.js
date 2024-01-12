const express = require('express');
const app = express();//muon su dung het chuc nang cua ham 
//express thi can goi ham express.
const port = 2004;

app.get('/', (req, res) => {
    res.send('Hello World vs Vincent Dang Dev!')
})
app.get('/about', (req, res) => {
    res.send(`I'm Eric!`)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})//
