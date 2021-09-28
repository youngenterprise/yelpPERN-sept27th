require("dotenv").config();
import express from "express";
const morgan=require("morgan");
const cors=require("cors");
const db=require("./db/index");

const app = express();

app.use(cors());

app.use(express.json());

