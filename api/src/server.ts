import 'reflect-metadata';
import './database';
const express = require('express');
import { router } from './routes';

const app = express();
const PORT = 3333 || process.env.PORT;

app.use(express.json());
app.use(router)

app.listen(PORT, () => {console.log(`App running at PORT ${PORT}`)});

