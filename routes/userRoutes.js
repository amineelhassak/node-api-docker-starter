const express = require("express");
const { getUsers, addUser, deleteAll, deleteUser, updateUser, getUser } = require("../services/userService");

const router = express.Router();


router.get("/users", getUsers);
router.post("/users", addUser);
router.delete("/users", deleteAll);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.get("/users/:id", getUser);

module.exports = router;
