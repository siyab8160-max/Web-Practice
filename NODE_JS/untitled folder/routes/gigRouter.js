const express = require("express")
const route = express.Router();



route.get("/", gigController.orderTrack);
route.get("/assignOrder",gigController.assignOrder);

module.exports=route;