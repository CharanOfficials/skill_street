import express from "express";
import UserController from "../controller/user.controller.js";
const router = express.Router();
const userController = new UserController();
/**
 * @swagger
 * paths:
 *   /api/users/signup:
 *     post:
 *       summary: User Sign Up
 *       description: Create a new user account with a given email and password
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: User created successfully
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Invalid user.
 *         '409':
 *           description: Conflict
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: User already exists.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Internal Server Error.
 */
router.post("/signup", (req, res) => {
  userController.signUp(req, res);
});
/**
 * @swagger
 * paths:
 *   /api/users/signin:
 *     post:
 *       summary: User Sign In
 *       description: Authenticate user with email and password and return an access token
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: Logged in successfully
 *                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGZlNzRiMDIwMjY4OTI5NDA2ZDAyNTUiLCJlbWFpbCI6ImVtYWlsQGV4YW1wbGUuY29tIiwiaWF0IjoxNjM2MzA4MzI5LCJleHAiOjE2MzYzMTk1Mjl9.L2SOUJ1zJ1gUSX-8jZi-VsZtrTJ91ZVe29WVCZT1wX4"
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Invalid user or password.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Internal Server Error.
 */
router.post("/signin", (req, res) => {
  userController.signIn(req, res);
});
export default router;
