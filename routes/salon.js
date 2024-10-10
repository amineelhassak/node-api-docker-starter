const express = require('express');
const {Salon, validateSalon} = require('../models/salon');
const { reset } = require('nodemon');
const router = express.Router();

router.get("/",(req,res) => {
    res.send("this good");
});

/**
 * @desc post new Salon
 * @route /salons
 * @method Post
 * @access public
 **/

router.post('/salons', async (req, res) => {
    try {
        const { error } = validateSalon(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const salon = new Salon(req.body);
        await salon.save();
        res.status(201).send(salon);
    } catch (error) {
        res.status(400).send(error);
    }
});

/**
 * @desc Get all Salons
 * @route /salons
 * @method Get
 * @access public 
 **/


router.get('/salons', async (req, res) => {
    try {
        const salons = await Salon.find();
        res.send(salons);
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @desc Get all Salons by id
 * @route /salons/id
 * @method Get
 * @access public
 **/

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
    try {
        const salon = await Salon.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!salon) return res.status(404).send('Salon not found');
        res.send(salon);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/salons/:id', async (req, res) => {
    try
    {
        const salon = await Salon.findByIdAndDelete(req.params.id);
        if (!salon) return res.status(404).send('Salon not found');
        res.send(salon);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
