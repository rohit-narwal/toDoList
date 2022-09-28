const express = require("express");
const bodyParser = require("body-parser");
// importing external made module
const date = require(__dirname + "/date.js")

app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', 'ejs');
// to store new items as global var
let items = [];
let workItems = []; 
app.get('/', (req, res) => {
    let day = date.getDate();
    res.render('index', {listTitle : day, newItemArr : items});
});

app.post("/", (req, res) => {
    var item = req.body.newItem;
    if (req.body.list == 'Work'){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
})

app.get('/work', (req, res) => {
    res.render('index', {listTitle : 'Work List', newItemArr : workItems});
})
app.post('/work', (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.listen(3000, () => {
    console.log("App running at 3000!");
})
