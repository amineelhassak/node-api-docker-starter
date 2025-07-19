const User = require("../models/userModels");
const asyncHandler = require('express-async-handler');
const errorMidlleware = require('../middlewares/errorMidlleware');
const ApiError = require("../utils/ApiError");
// GET all users
/**
 * @desc GET all users
 * @route /users
 * @method GET
 * @access Private
**/
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
});

// POST new user
/**
 * @desc Post a new user
 * @route /users
 * @method POST
 * @access Private
 **/
const addUser = asyncHandler(async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
        success: true,
        message: "User added successfully",
        data: user
    });
});
// DELETE all users
/**
 * @desc Delete all users
 * @route /users
 * @method DELETE
 * @access Private
 **/
const deleteAll = asyncHandler(async (req, res) => {
    await User.deleteMany();
    res.status(200).json({
        success: true,
        message: "All users have been deleted"
    });
});

// DELETE one user by ID
/**
 * @desc Delete a single user by ID
 * @route /users/:id
 * @method DELETE
 * @access Private
 **/
const deleteUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } else {
        return next(new ApiError(`User not found ${req.params.id}`, 404));
    }
});

// PUT update a user by ID
/**
 * @desc Update a user by ID
 * @route /users/:id
 * @method PUT
 * @access Private
 **/
const updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (user) {
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });
    } else {
        return next(new ApiError("User not found", 404));
    }
});

// GET one user by ID
/**
 * @desc Get a user by ID
 * @route /users/:id
 * @method GET
 * @access Private
 **/

const getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.status(200).json({
            success: true,
            data: user
        });
    } else {
        return next(new ApiError("User not found", 404));
    }
});

// Export the functions
module.exports = {
    getUsers,
    addUser,
    deleteAll,
    deleteUser,
    updateUser,
    getUser
};
