import * as express from 'express';
import { Models } from '@invoi/api/models';

function randomData(): Models.Mock {
    const id = Math.random()
        .toString(36)
        .substr(2);
    return {
        id,
        title: `Hello World ${id}`
    };
}

const app = express();

app.get('/data', (_req, res) => {
    const data: Models.Mock[] = Array.from({ length: 10 }).map(randomData);
    res.json(data);
});

app.listen(5000);

console.log('API started on port 5000');
