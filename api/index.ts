import express from 'express';
import { testRouter } from './src/routes/test';

const PORT = 9000;
const app = express();

app.use(express.json());

// routes
app.use("/test", testRouter);

app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
})