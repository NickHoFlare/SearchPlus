import express from 'express';
import axios from 'axios';

export const duckDuckGoRouter = express.Router();


const url = 'https://api.duckduckgo.com/?format=json&pretty=1&no_html=1&skip_disambig=1';

duckDuckGoRouter.get("/", async (req, res) => {
    const searchTerms = req.query.query;
    const fullUrl = `${url}&q=${searchTerms}`;

    let duckResponse;
    try {
        duckResponse = await axios.get(fullUrl);
    } catch (err) {
        res.json(err);
    }
    
    duckResponse ? res.send(duckResponse.data) : res.send('No response from DuckDuckGo🤷‍♂️');
});