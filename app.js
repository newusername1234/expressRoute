const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const contactRouter = require('./routes/contact');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'welcome home'
    })
})

app.use('/contact', contactRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})