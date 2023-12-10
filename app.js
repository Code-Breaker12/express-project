const express = require('express');
const app = express();

app.get('/', (req, res)=>{
console.log('user hit the resource');    
res.status(200).send('Homepage');
})
app.get ('/contact', (req,res)=>{
res.status(200).send('Contact Page Bro');
})
app.all('*', (req, res)=>{
res.status(404).send('<h1>Resource not found</h1>')    
})
app.listen(5000, () => { 
    console.log('server is listening on port 5000');
})

// app.get
// app.post
// app.put
// app.delete
// app.use
// app.all
// app.listen