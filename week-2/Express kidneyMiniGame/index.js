/*
Create an in memory Hospital
4 routes to create

1)GET    :User can check how many kidneys they have total, total healthy kidneys ,and total unhealthy kidneys
2)POST   :User can add a new kidney
3)PUT    :User can replace a unhealthy kidney, make it healthy
4)DELETE :User can remove a unhealthy kidney

*/

const express= require('express')
const bodyParser=require("body-parser")

const app=express()

app.use(express.json())

//in memory->
let user={
    name:'john',
    kidney:[{
        healthy:false
    }]
}

let users=[user];



app.get('/',(req,res)=>{
    const johnKidneys=users[0].kidney;  //healthy:false
    const totalNoOfKidneys= johnKidneys.length;
    let totalNoOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            totalNoOfHealthyKidneys++;
        }
    }

    const totalNoOfUnhealthyKidneys=totalNoOfKidneys-totalNoOfHealthyKidneys;

    res.json({
        totalNoOfKidneys,
        totalNoOfHealthyKidneys,
        totalNoOfUnhealthyKidneys
    })

})



//to add the new kidney we need to think about it would be healthy or unhealthy
app.post('/',(req,res)=>{
    //we will give true/false of isHealthy in body
    const isHealthy=req.body.isHealthy;

    //push new kidney everytime post button hit as healthy or unhealthy
    users[0].kidney.push({
        healthy:isHealthy
    })

    res.json({
        msg:"done"
    })
})



app.put('/',(req,res)=>{
    // const johnKidney=users[0].kidney; //it gives first user kidney
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true;
    }

    res.json({
        msg: "All kidneys have been made healthy"
    })
})


app.delete('/',(req,res)=>{
    if(isThereAtLeastOneUnhealthyKidney()){
        const newKidney=[] //store all healthy kidneys
        for(let i=0;i<users[0].kidney.length;i++){
            if(users[0].kidney[i].healthy){
                newKidney.push({
                    healthy:true
                })
            }
        }
    
        users[0].kidney=newKidney

        res.json({
            msg:"deleted all unhealthy kidneys"
        })
    }
    else{
        res.status(404).json({
            msg:"Invalid kidney"
        })
    }
})

//to make sure it runs when there exist atleast one unhealthy kidney
function isThereAtLeastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidney.length;i++){
        if(!users[0].kidney.healthy){
            atleastOneUnhealthyKidney=true;
        }
    }

    return atleastOneUnhealthyKidney;
    

}

app.listen(3000, () => console.log("Server running on port 3000"));