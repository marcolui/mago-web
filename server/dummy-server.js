const express = require('express');
const app = express();
const port = 3009;

var items = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Elmo'}
];

app.get('/api/items', function (req, res) {
    res.json(items);
});

app.get('/api/items/:itemId', function(req, res) {
    res.json(items.find(item => item.id === parseInt(req.params.itemId)))
});
app.listen(port, function () {
    console.log('dummy server listening on port ' + port);
});