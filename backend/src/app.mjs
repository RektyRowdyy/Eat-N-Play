import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/routes.mjs';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "20kb"
}));

app.use(express.urlencoded({extended: true, limit: "20kb"}));

app.use(express.static("public"));

app.use(cookieParser());

app.use(routes);

export { app }