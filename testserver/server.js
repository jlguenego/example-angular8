const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
    console.log('req.url', req.url);
    next();
});


app.get('/ws/quizz', (req, res, next) => {
    try {
        const quizzStore = JSON.parse(fs.readFileSync('./quizzStore.json', { encoding: 'utf8' }));
        console.log('quizzStore', quizzStore);
        res.json(quizzStore);
    } catch(e) {
        res.json({});
    }
});

app.post('/ws/quizz', (req, res, next) => {
    const quizzStore = req.body;
    fs.writeFileSync('./quizzStore.json', JSON.stringify(quizzStore));
    res.status(204).end();
});

const htdocs = '../quizz/dist/quizz';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {
    icons: true
}));

app.use(function (req, res, next) {
    console.log('404: Page not Found', req.url);
    next();
});

const port = 8000;
app.listen(port, function () {
    console.log('server started on port ' + port);
});
