import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
import 'dotenv/config';

import { connectMongoDB } from './db/connectMongoDB.js';
import logger from './middlewares/logger.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import productsRouter from './routers/products.js';
import authRouter from './routers/authRoutes.js';

const app = express();

app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());

app.use('/auth', authRouter);
app.use('/products', productsRouter);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
