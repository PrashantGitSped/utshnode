const express = require('express');
const mysql = require('mysql');
const port = process.env.PORT || 3000;

const portfolData = require('./utils/portfolio');




//create connection

/*const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});

//connect
db.connect((err) => {
    if(err){
        throw err
    }
    console.log('mysql connected');
});
*/
const app = express();

//register vue engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

/*
//create db
app.get('/createdb', (req,res) => {
    let sql= 'CREATE DATABASE nodemysql';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('databse screated');
    })
})
*/


//final db start


/*   8888888888888888
    const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'

});*/

const dbaws = mysql.createConnection({
    host: 'databasesurge.ct4ad3trjeto.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: '41gO7hMvA95',
    database: 'utshreach'


});

dbaws.connect((err) => {
    if (err) throw err
    console.log('AWS connected');
})

/*db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});8888888888888888 */
/*
app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('database created.....');
    });
})

//create table
app.get('/createposttable', (req,res)=>{
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, name VARCHAR(50), phone VARCHAR(10), email varchar(50), PRIMARY KEY(id))';
    db.query(sql, (err,result) =>{
        if(err) throw err;
        console.log(result);
        res.send('piat table created');
    })
});


//insert post1
app.get('/addpost1', (req,res)=> {
    let post = {name:'prakash', phone: '8975646789', email: 'prakash@gmail.com'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err,result) =>{
        if(err) throw err;
        console.log(result);
        res.send('pINSERTED 1');
    } )
})


 */
//final db end

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log('server started on port ' + port);
});


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/portfolio', (req,res) => {
    const viewsData = {
        portImgss: portfolData.portImgss,

    }
    res.render('portfolio', {viewsData});
})

app.post('/sendform', (req,res) => {
    console.log('send form requestedddd..');

    let post = {name: req.body.name, phone: req.body.phone, email: req.body.email};
    let sql = 'INSERT INTO posts SET ?';
    let query = dbaws.query(sql, post, (err,result) =>{
        if(err) throw err;
        console.log(result);

        res.redirect('/');

    } )
})
