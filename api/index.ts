import express from 'express';
import { indexRouter } from './src/routes';
import { testRouter } from './src/routes/test';
import dotenv from 'dotenv';

// Configure dotenv for .env environment variable support
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

// routes
app.use('/', indexRouter)
app.use('/test', testRouter);

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})