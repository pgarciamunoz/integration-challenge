// Imports
const express = require('express');
const app = express();



app.use(express.static('public'));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
       res.render('about');
    })





// Listen on Port 5000
const port = 5000;
app.listen(port, () => console.info(`App listening on port ${port}`))