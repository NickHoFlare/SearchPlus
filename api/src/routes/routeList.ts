import express from 'express';

export const routeListRouter = express.Router();

const routes = {
    routes: [
        "/duckduckgo",
        "/bing",
        "/google",
        "/searchplus"
    ]
};

routeListRouter.get("/", (req, res) => {
    res.json(routes);
});