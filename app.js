const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {MongoClient,ObjectId}=require('mongodb');
const mongoose=require('mongoose');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));


MongoClient.connect('mongodb://Vaidesh1999:maggie123@ds161316.mlab.com:61316/flash',{ useNewUrlParser: true },function(err,db){
    if(err) throw err;
    console.log("Connected");
    var dbo=db.db("flash");
    dbo.collection('model1').find().toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    })

    /*dbo.collection("model1").deleteOne({food:'Achar'}).then(function(err,res){
        if(err) console.log(err);
        console.log("deleted : "+res);
        db.close();
    })*/
})
/*var x={name:"vaidesh",age:54};
var {name}=x;                   //object destructoring
var obj=new ObjectId(1234);
console.log(obj)*/

/*MongoClient.connect('mongodb://Vaidesh1999:maggie123@ds161316.mlab.com:61316/flash',{ useNewUrlParser: true },function(err,db){
    if(err) throw err;
    console.log("Connected to mongo");
    var dbo=db.db("flash");
    dbo.collection("model1").insert({
        food : 'Achar',
        price: 541,
        addons:[
            {name:"Rice"},
            {name:'Plums'}
        ]
    },function(err,res){
    
    dbo.collection('model1').find({},function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    })
})
})*/
/*
mongoose.connect('mongodb://Vaidesh1999:maggie123@ds161316.mlab.com:61316/flash',{ useNewUrlParser: true });
var db=mongoose.connection;
db.on('error',function(err){
    console.log(err);
})

var foodSchema=new mongoose.Schema({
    food:String,
    price:Number,
    addons:[{name:String}],
    
})


foodSchema.method.showData=function(){
    var food=`${this.food} with ${this.addons[0].name} of Rs.${this.price} is so delicious`;
    return food;
}

const Coll=mongoose.model('model1',foodSchema);
*/

/*var doc1=new Coll({
    food:"Chole Bhature",
    price:210,
    addons:[{name:"chutney"}]
})*/

/*doc1.save(function(err,res){
    if(err){console.log(err)}
    else{
        console.log("item saved : "+res);
    }
})*/
/*
db.once('open',function(){
    console.log('connection made');
})

app.get('/',function(req,res){
    res.sendFile('/index.html')
})
*/

/*
app.post("/items",function(req,res){
    console.log("Reached")
    var data=req.body;
    doc=new Coll({
        food:data.foodItem,
        price:data.foodPrice,
        addons:[{name:data.foodAddOns}]
    })

    doc.save(function(err,data){
        if(err) throw err;
        
        res.send(doc.showData());
    })
})*/

/*app.listen(process.env.port,function(){
    console.log(`Listening to port ${process.env.port}`);
})*/