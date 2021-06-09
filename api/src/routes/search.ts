import express from 'express';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import { IBingResponse, IGoogleResponse, IDuckDuckGoResponse } from '../types';
import { mapResponses } from '../mappers/mapper';

export const searchRouter = express.Router();
dotenv.config();

const baseUrl = `http://localhost:${process.env.PORT}`;

interface IResponseAndDuration {
    response: AxiosResponse,
    duration: number
}

const invokeAndTimeSearch = async (request: Promise<AxiosResponse>): Promise<IResponseAndDuration> => {
    const startTime = Date.now();
    const response = await request;
    const msElapsed = Date.now() - startTime;

    const responseAndDuration: IResponseAndDuration = { response: response, duration: msElapsed }
    return responseAndDuration;
}

searchRouter.get("/", async (req, res) => {
    const searchTerms = req.query.query;

    try {
        // implement header for cache-control: no-store, max-age: 0 to obtain accurate timings
        const requestHeaders: AxiosRequestConfig = { 
            headers: { 'Cache-Control': 'no-cache,max-age=0' }
        }

        const bingRequest = axios.get<IBingResponse>(`${baseUrl}/bing?query=${searchTerms}`, requestHeaders);
        const googleRequest = axios.get<IGoogleResponse>(`${baseUrl}/google?query=${searchTerms}`, requestHeaders);
        const duckDuckGoRequest = axios.get<IDuckDuckGoResponse>(`${baseUrl}/duckduckgo?query=${searchTerms}`, requestHeaders);

        const bingResponse = await invokeAndTimeSearch(bingRequest);
        const googleResponse = await invokeAndTimeSearch(googleRequest);
        const duckDuckGoResponse = await invokeAndTimeSearch(duckDuckGoRequest);

        const mappedResponses = mapResponses([bingResponse.response, googleResponse.response, duckDuckGoResponse.response],
            [bingResponse.duration, googleResponse.duration, duckDuckGoResponse.duration]);

        res.send(mappedResponses);
    } catch (err) {
        res.json(err);
    }
});