const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const app = express();


app.use(express.static('public'));
app.use(cors());
app.use(express.json());

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => res.json({ message: "Server works" }))
app.get('/about', (req, res) => {
    res.render('about');
})



app.post('/api', (req, res) => {
const data = req.body;
   const CSID = req.body.user.customerSessionId;
    //cdApi.setCustomerSessionId(CSID);
    console.log('Adding user:::::', data);
   //console.log('CSID::::::', CSID)
    res.json("user addedd");
    const options = {
        method: "POST",
        url: "http://hooks.zapier.com/hooks/catch/1888053/bgwofce/",
        headers: {
            'Content-Type': "application/json",
            'accept': "application/json"
        },
        body: JSON.stringify(req.body.user)
    };
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            // cdApi.setCustomerSessionId(CSID);
        })
        .catch(function (error) {
            console.error(error.message);
            res.json(error.message);
        });
}
);


// Listen on Port 5000
const port = 5000;
app.listen(port, () => console.info(`App listening on port ${port}`))


