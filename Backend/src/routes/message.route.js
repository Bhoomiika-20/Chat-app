import express from "express";
const router = express.Router();

router.get("/send",(req,res)=>{res.send("Send message enpoint");
});

router.get("/receive",(req,res)=>{res.send("Receive message enpoint");
});


export default router;