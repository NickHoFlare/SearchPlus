import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

export const bingRouter = express.Router();
dotenv.config();

const url = 'https://api.bing.microsoft.com/v7.0/search';

bingRouter.get("/", async (req, res) => {
    const searchTerms = req.query.query;
    const fullUrl = `${url}?q=${searchTerms}`;

    let bingResponse;
    try {
        bingResponse = await axios.get(fullUrl, {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY
            }
        });
    } catch (err) {
        res.json(err);
    }
    
    bingResponse ? res.send(bingResponse.data) : res.send('No response from Bing🤷‍♂️');
});