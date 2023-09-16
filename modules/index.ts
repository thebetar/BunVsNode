const crypto = require('crypto');
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_: any, res: Response) => {
    const secret = crypto.randomBytes(40).toString('hex');
    res.send(secret);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});