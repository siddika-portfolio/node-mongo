const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const users = ['Asad', "Sohan", "Mithila", "Nila", "Moni"]
const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    const fruit = {
        product: 'ada',
        price:220           
    }
    res.send(fruit)
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name})
})

// post
app.post('/addUser', (req, res) => {
    console.log('abc', req.body)
})

app.listen(4000, () => console.log('Listening to port 4000'))