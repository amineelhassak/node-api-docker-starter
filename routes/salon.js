const express = require('express');
const bodyParser = require('body-parser');
const Salon = require('../models/salon');

const router = express.Router(); // Use 'router' instead of 'app' for modular routing

// Middleware
router.use(bodyParser.json());

router.post('/salons', async (req, res) => {
    // res.json({message : 'rak nadi 1'});
    try {
        const salon = new Salon(req.body);
        await salon.save();
        res.status(201).send(salon);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/salons', async (req, res) => {
    try {
        const salons = await Salon.find();
        res.send(salons);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/salons/:id', async (req, res) => {
    res.json({message : 'rak nadi 3'});

    try {
        const salon = await Salon.findById(req.params.id);
        if (!salon) return res.status(404).send('Salon not found');
        res.send(salon);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/salons/:id', async (req, res) => {
    res.json({message : 'rak nadi 4'});
    // try {
    //     const salon = await Salon.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    //     if (!salon) return res.status(404).send('Salon not found');
    //     res.send(salon);
    // } catch (error) {
    //     res.status(400).send(error);
    // }
});

router.delete('/salons/:id', async (req, res) => {
    res.json({message : 'rak nadi 5'});

    // try {
    //     const salon = await Salon.findByIdAndDelete(req.params.id);
    //     if (!salon) return res.status(404).send('Salon not found');
    //     res.send(salon);
    // } catch (error) {
    //     res.status(500).send(error);
    // }
});

module.exports = router;
