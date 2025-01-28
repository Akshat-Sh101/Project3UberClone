const express = require("express")
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../controllers/user.controllers')
const { authMiddleware } = require("../middleware/auth.middleware")

router.post('/register', [ body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage("First name must be atleast 3 character long"),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 character long') ],
    userController.registerUser
    )

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body(password).isLength({ min: 6 }).withMessage("Password must be minimum 6 characters long")
],
userController.logInUser
)

router.get('/profile', authMiddleware ,userController.getUserProfile )

module.exports = router;