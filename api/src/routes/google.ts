import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

export const googleRouter = express.Router();
dotenv.config();

const searchEngineId = process.env.GOOGLE_SEARCH_ENGINE_ID;
const apiKey = process.env.GOOGLE_API_KEY;
const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}`;

googleRouter.get("/", async (req, res) => {
    const searchTerms = req.query.query;
    const fullUrl = `${url}&q=${searchTerms}`;

    let googleResponse;
    try {
        googleResponse = await axios.get(fullUrl);
    } catch (err) {
        res.json(err);
    }
    
    googleResponse ? res.send(googleResponse.data) : res.send('No response from Google🤷‍♂️');
});