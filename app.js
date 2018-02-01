// request object

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('hostname = ', req.hostname);
    console.log('method = ', req.method);
    console.log('path = ', req.path);
    console.log('protocol = ', req.protocol);
    console.log('query = ', req.query);
    console.log('headers', req.headers);
    res.send('Done');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at port', port);
});