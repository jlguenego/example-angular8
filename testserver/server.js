const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(function (req, res, next) {
    console.log('req.url', req.url);
    next();
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
