require("dotenv").config();
const morgan=require("morgan");
const express=require("express");
const cors=require("cors");
const db=require("./db/index");

const app = express();

app.use(cors());

app.use(express.json());


//get all
app.get("/api/v1/restaurants",async (req,res)=>{
    try {
        const results=await db.query("SELECT * FROM restaurants");

        res.status(200).json({
            status:"Success",
            results:results.rows.length,
            data:{
                restaurants:results.rows,
            },
        })

    } catch (err) {
        console.log(error);
    }
});

//get selected restaurants
app.get("/api/v1/restaurants/:id", async (req,res)=>{
    console.log(req.params.id);
    try {
        const results=await db.query("select * from restaurants where id =$1",[req.params.id]);
        res.status(200).json({
            status:"success",
            data:{
                restaurant:results.rows[0],
            }
        });
    } catch (err) {
        console.log(err);        
    }
});

//create a restaurant




const port =process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server is up and listening on port ${port}`);
});