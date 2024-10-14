const express = require('express'); 
// Import the express framework

const {Salon, validateSalon} = require('../models/salon'); 
const { cache } = require('joi');
// Import the 'Salon' model and a validation function 'validateSalon' from the 'models/salon' file

const router = express.Router(); 
// Create a new router object using express, which allows you to define routes in separate modules

/**
 * @desc GET route for testing purposes
 * @route /
 * @method GET
 * @access Public
 **/
router.get("/",(req, res) => {
    res.send("this good"); 
    // Respond to the GET request at the root URL with a simple message
});

/**
 * @desc POST route to create a new Salon
 * @route /salons
 * @method POST
 * @access Public
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
 * @desc GET route to retrieve all Salons
 * @route /salons
 * @method GET
 * @access Public
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
 * @desc DELETE route to remove all Salons
 * @route /salons
 * @method DELETE
 * @access Public
 **/
router.delete('/salons', async (req, res) => {
    try {
        await Salon.deleteMany();
        res.status(200).send('All salons have been deleted successfully.'); // Send a success message
    } catch (error) {
        res.status(500).send(error);
    }
});

/*
 * @desc GET route to retrieve a single Salon by ID
 * @route /salons/:id
 * @method GET
 * @access Public
 **/

router.get('/salons/:id', async (req, res) => {
    try {
        const salon = await Salon.findById(req.params.id); 
        if (!salon) return res.status(404).send('Salon not found'); 
        res.send(salon); 
    } catch (error) {
        res.status(500).send(error); 
    }
});

/**
 * @desc PUT route to update an existing Salon by ID
 * @route /salons/:id
 * @method PUT
 * @access Public
 **/
router.put('/salons/:id', async (req, res) => {
    try {
        const salon = await Salon.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        ); 
        if (!salon)
            return res.status(404).send('Salon not found'); 
        res.status(200).end();
    } catch (error) {
        res.status(400).send(error); 
        // Send a 400 status if validation or update fails
    }
});

/**
 * @desc DELETE route to remove a Salon by ID
 * @route /salons/:id
 * @method DELETE
 * @access Public
 **/
router.delete('/salons/:id', async (req, res) => {
    try {
        const salon = await Salon.findByIdAndDelete(req.params.id); 
        // Find the salon by ID and delete it

        if (!salon) return res.status(404).send('Salon not found'); 
        // If no salon is found, return a 404 status

        res.send(salon); 
        // Respond with the deleted salon
    } catch (error) {
        res.status(500).send(error); 
        // Send a 500 status if the delete operation fails
    }
});

module.exports = router; 
// Export the router to be used in the main app
