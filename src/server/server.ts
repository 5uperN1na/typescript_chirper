import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as morgan from 'morgan';
import apiRouter from './routes';


const app = express();

app.use(cors());
app.use(morgan('dev'));

//express middleware
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

// import './db';