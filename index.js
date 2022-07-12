const mongoose=require("mongoose");
// ye pahle connect karega 27017 pe and sample name ka database bna dega 
mongoose.connect("mongodb://localhost:27017/sample").then(()=>
{console.log("conected to mongodb successfully")}).catch((err)=>
{
    console.log(err)
})

// firstly we will make a schema like dbms
const student=mongoose.Schema({
name:String,
rollnum:Number,
class:String
})

// model is nothing it is a collection
const Student = mongoose.model("Student",student);

// put element in database as per schema
const fun=async()=>{
    // method 1
// const ss=new Student({
//     name:"Gaurav",
//     rollnum:1900153,
//     class:"cse1"
// })
// await ss.save();


    //  method 2 (yahi use kernenge aage se)
    // const ss=await Student.create({
    //     name:"Gaurav",
    // rollnum:1900153,
    // class:"cse1"
    // })
    // console.log(ss);


// it will find the data
    // const ss=await Student.find();
    // console.log(ss);

    // const ss=await Student.create({
    //         name:"Saurav",
    //     rollnum:1900151,
    //     class:"cse2"
    //     })

    // it will show that data which contain rollnum=1900153
     const ss=await Student.find({rollnum:{$eq:1900153}});
     console.log(ss);


}

// function call
fun();

// yaha se u can learn rest of the operators and many more things
// https://www.mongodb.com/docs/manual/reference/operator/query/