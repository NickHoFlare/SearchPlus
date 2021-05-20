import express from 'express';

export const indexRouter = express.Router();

const routes = {
    routes: "/test"
}

indexRouter.get("/", (req, res) => {
    res.json(routes);
});