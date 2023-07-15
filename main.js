const express = require('express')
const bodyParser = require('body-parser')
const  ejs = require ('ejs')

const app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended : true}))

let newItems =[]

app.get('/' , (req , res , next)=>{
    let options = { weekday : 'long' , year : 'numeric' , month : 'long' , day : 'numeric'}
    let today = new Date();

    let day = today.toLocaleDateString('en-US' , options);
    res.render("lists", { KindOfDay : day , newListItems : newItems }) 
});

app.post('/' , (req, res , next)=>{

let newItem = req.body.newItem
newItems.push(newItem)
res.redirect('/')

})


app.listen(3000 , ()=> console.log("server is runnning at port 3000"))


