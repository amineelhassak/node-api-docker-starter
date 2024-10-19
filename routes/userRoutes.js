const express = require('express'); 
const router = express.Router(); 
const {getUsers,addUser,deleteAll,deleteUser, updateUser, getUser} = require('../services/userService');

            /*                /users               */
// GET all users
router.get("/",getUsers);
// POST new user
router.post("/",addUser);
// DELETE all users
router.delete("/",deleteAll);

// ------------------------------------------------------------------------------

            /*              /users/id            */

// DELETE one user by ID
router.delete("/",deleteUser);
// UPDATE one user by ID
router.put("/",updateUser);
// GET one user by id
router.get("/",getUser);

module.exports = router;
