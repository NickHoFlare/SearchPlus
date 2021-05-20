import express from 'express';

export const testRouter = express.Router();

testRouter.get("/", (req, res, next) => {
    res.send("IT WORKS!! ⚡");
});