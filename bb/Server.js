const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send(`Server is up and running`);
});
app.post('/cred', (req, res) => {


    const username = req.body.name;
    const useremail = req.body.email;

    res.json({
        username: username,
        useremail: useremail
    });


});


app.listen(process.env.PORT || port, () => {
    console.log(`listening on port ${port}`);
});

