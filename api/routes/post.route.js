import express, { Router } from "express";

const router = express.Router();

router.get("/test" , () => {
    console.log("it works");
})

export default router;