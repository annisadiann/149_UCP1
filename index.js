const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

db.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.post('/hotel', async (req, res) => {
    const data = req.body;
    try {
        const hotel = await db.Hotel.create(data);
        res.send(hotel);
    } catch (error) {
        res.status(500).send({message: error.message}); 
    }
});

app.get('/hotel', async (req, res) => {
    try {
        const hotel = await db.Hotel.findAll();
        res.send(hotel);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

