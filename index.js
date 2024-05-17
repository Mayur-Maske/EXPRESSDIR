const express =require("express");
const app=express();



let port=8080;
app.listen(port,()=>{
    console.log(`app listelingn on port ${port};`)
});

// app.use((req,res)=>{
//     console.log("new incoming request");
//     res.send(
//         {
//             name:"mayur",
//             age:24
//         }
//     );
// });

app.get("/",(req,res)=>{
    res.send("hello i am root");
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no results");
})

// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// })
