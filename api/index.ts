import express from 'express';
import dotenv from 'dotenv';
import { routeListRouter, duckDuckGoRouter, googleRouter, bingRouter, searchRouter } from './src/routes';


// Configure dotenv for .env environment variable support
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

// routes
app.use('/', routeListRouter)
app.use('/duckduckgo', duckDuckGoRouter);
app.use('/google', googleRouter);
app.use('/bing', bingRouter);
app.use('/searchplus', searchRouter)

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})