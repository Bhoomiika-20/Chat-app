import express from "express";
const router = express.Router();

router.get("/signup",(req,res)=>{res.send("Signup enpoint");
})

router.get("/login",(req,res)=>{res.send("Login enpoint");
})

router.get("/logout",(req,res)=>{res.send("Logout enpoint");
})
export default router;