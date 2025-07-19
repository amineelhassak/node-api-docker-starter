const express = require('express'); 
const {Salon} = require('../models/salon'); 
const ApiError = require('../utils/ApiError');
const router = express.Router(); 

// /**
//  * @desc GET route for testing purposes
//  * @route /
//  * @method GET
//  * @access Public
//  **/
router.get("/",(req, res) => {
    res.send("this good"); 
});

// /**
//  * @desc POST route to create a new Salon
//  * @route /salons
//  * @method POST
//  * @access Public
//  **/

router.post('/salons', async (req, res, next) => {
    try {
        const salon = new Salon(req.body); 
        await salon.save(); 
        res.status(201).json({
            success: true,
            data: salon
        });
    } catch (error) {
        next(new ApiError(error.message, 400));
    }
});

/**
 * @desc GET route to retrieve all Salons
 * @route /salons
 * @method GET
 * @access Public
 **/
router.get('/salons', async (req, res, next) => {
    try {
        const salons = await Salon.find(); 
        res.json({
            success: true,
            count: salons.length,
            data: salons
        }); 
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
});


/**
 * @desc DELETE route to remove all Salons
 * @route /salons
 * @method DELETE
 * @access Public
 **/
router.delete('/salons', async (req, res, next) => {
    try {
        await Salon.deleteMany();
        res.status(200).json({
            success: true,
            message: 'All salons have been deleted successfully.'
        });
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
});

/*
 * @desc GET route to retrieve a single Salon by ID
 * @route /salons/:id
 * @method GET
 * @access Public
 **/

router.get('/salons/:id', async (req, res, next) => {
    try {
        const salon = await Salon.findById(req.params.id); 
        if (!salon) {
            return next(new ApiError('Salon not found', 404));
        }
        res.json({
            success: true,
            data: salon
        }); 
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
});

/**
 * @desc PUT route to update an existing Salon by ID
 * @route /salons/:id
 * @method PUT
 * @access Public
 **/
router.put('/salons/:id', async (req, res, next) => {
    try {
        const salon = await Salon.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        ); 
        if (!salon) {
            return next(new ApiError('Salon not found', 404));
        }
        res.json({
            success: true,
            data: salon
        });
    } catch (error) {
        next(new ApiError(error.message, 400));
    }
});

/**
 * @desc DELETE route to remove a Salon by ID
 * @route /salons/:id
 * @method DELETE
 * @access Public
 **/
router.delete('/salons/:id', async (req, res, next) => {
    try {
        const salon = await Salon.findByIdAndDelete(req.params.id); 
        if (!salon) {
            return next(new ApiError('Salon not found', 404));
        }
        res.json({
            success: true,
            message: 'Salon deleted successfully',
            data: salon
        }); 
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
});

module.exports = router; 
