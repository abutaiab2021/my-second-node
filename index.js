const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('WOW I am Excited for learning Node. with nodemon automatic restart');
})

const users = [
    {id:0,name:"sabana",email:'sabana@gmail.com',phone:'01686087468'},
    {id:1,name:"sabnoor",email:'taiab@gmail.com',phone:'01686087468'},
    {id:2,name:"sakib",email:'taiab@gmail.com',phone:'01686087468'},
    {id:3,name:"kasem",email:'taiab@gmail.com',phone:'01686087468'},
    {id:4,name:"babul",email:'taiab@gmail.com',phone:'01686087468'},
    {id:5,name:"tarek",email:'taiab@gmail.com',phone:'01686087468'}
]

app.get('/users',(req,res)=>{
   const search = req.query.search;
   //use query search
    if(search){
        const searchResult =  users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }else{
        res.send(users);
    }
    
});


//app.METHOD
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
});

//dynamin api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits',(req,res)=>{
    res.send(['mango','banana','apple'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('Yammy Yammy fazi is tok')
});



app.listen(port,()=>{
    console.log('second port is:',port)
})

