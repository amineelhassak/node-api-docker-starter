const User = require("../models/userModels");

// /**
//  * @desc GET all users
//  * @route /users
//  * @method POST
//  * @access Private
//  **/

exports.getUsers("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send({ error: 'Failed to retrieve users' });
    }
});

// POST new user
/**
 * @desc Post a new user
 * @route /users
 * @method POST
 * @access Private
 **/

exports.addUser("/users", async (req, res) => {  
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send("User added successfully");
    } catch (e) {
        res.status(500).send({ error: 'Failed to add user', details: e.message });
    }
});


// DELETE all users
/**
 * @desc Delete all users
 * @route /users
 * @method DELETE
 * @access Private
 **/

exports.deleteAll("/users", async (req, res) => {  
    try {
        await User.deleteMany();
        res.status(200).send("All users have been deleted");
    } catch (e) {
        res.status(500).send({ error: 'Failed to delete users' });
    }
});

// DELETE one user by ID
/**
 * @desc Delete a single user by ID
 * @route /users/:id
 * @method DELETE
 * @access Private
 **/

exports.deleteUser("/users/:id", async (req, res) => {  
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (user) {
            res.status(200).send("User deleted successfully");
        } else {
            res.status(404).send("User not found");
        }
    } catch (e) {
        res.status(500).send({ error: 'Failed to delete user' });
    }
});

// PUT update a user by ID
/**
 * @desc Update a user by ID
 * @route /users/:id
 * @method PUT
 * @access Private
 **/

exports.updateUser("/users/:id", async (req, res) => {  
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (user) {
            res.status(200).send("User updated successfully");
        } else {
            res.status(404).send("User not found");
        }
    } catch (e) {
        res.status(500).send({ error: 'Failed to update user' });
    }
});

// GET one user by ID
/**
 * @desc Get a user by ID
 * @route /users/:id
 * @method GET
 * @access Private
 **/

exports.getUser("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (e) {
        res.status(500).send({ error: 'Failed to retrieve user' });
    }
});