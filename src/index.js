const express = require('express');
const app = express();
const port = 8080;

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

    app.get('/', (req, res) => {
    res.json({
        test: 'hello',
    });
});

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
