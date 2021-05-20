import express from 'express';
import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import { BingResponse } from '../types/bing';

export const bingRouter = express.Router();
dotenv.config();

const url = 'https://api.bing.microsoft.com/v7.0/search';

bingRouter.get("/", async (req, res) => {
    const searchTerms = req.query.query;
    const fullUrl = `${url}?q=${searchTerms}`;

    let bingResponse: AxiosResponse<BingResponse>;
    try {
        bingResponse = await axios.get<BingResponse>(fullUrl, {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY
            }
        });

        bingResponse ? res.send(bingResponse.data) : res.send('No response from Bing🤷‍♂️');
    } catch (err) {
        res.json(err);
    }
});