const express = require('express');
const app = express();
const count = process.env.COUNT || 0;

app.get('/', (req, res) => {
 res.end('Hello K8s' + count);
});

app.listen(3000, () => {
 console.log('Server started on port http://localhost:3000');
});