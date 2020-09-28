import express from 'express';
import connectDatabase from './config/db';

// turn on express server
const app = express();

//API endpoints
app.get('/',(req, res) => 
    res.send('http get request sent to root api endpoint')
);

//Connection listner
app.listen(3000, () => console.log('Express server running on port 3k'));

