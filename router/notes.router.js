import NotesController from "../controller/notes.controller.js";
import express from "express";
import validateUser from "../middleware/authorization.middleware.js";
const router = express.Router();
const notesController = new NotesController();
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * paths:
 *   /api/notes:
 *     post:
 *       summary: Add a new note
 *       description: Create a new note with a given title and content
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: Note added successfully
 *                 data:
 *                   _id: "60a76a846c3c4a001e266c56"
 *                   title: "New Note"
 *                   content: "This is a new note."
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Invalid Data.
 *         '401':
 *           description: Unauthorized User
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Unauthorized User.
 *         '413':
 *           description: Inappropriate message lengths
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Inappropriate message lengths.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Internal Server Error.
 */

router.post("/", validateUser, (req, res) => {
  notesController.addNote(req, res);
});
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * paths:
 *   /api/notes:
 *     get:
 *       summary: Get all notes
 *       description: Retrieve all notes
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: Data retrieved successfully
 *                 data:
 *                   - _id: "60a76a846c3c4a001e266c56"
 *                     title: "Example Note 1"
 *                     content: "This is an example note 1."
 *                     createdAt: "2024-01-01T15:29:36.585Z"
 *                     updatedAt: "2024-01-01T15:29:36.585Z"
 *                   - _id: "60a76a846c3c4a001e266c57"
 *                     title: "Example Note 2"
 *                     content: "This is an example note 2."
 *                     createdAt: "2024-01-01T15:29:36.585Z"
 *                     updatedAt: "2024-01-01T15:29:36.585Z"
 *                   - _id: "60a76a846c3c4a001e266c58"
 *                     title: "Example Note 3"
 *                     content: "This is an example note 3."
 *                     createdAt: "2024-01-01T15:29:36.585Z"
 *                     updatedAt: "2024-01-01T15:29:36.585Z"
 *         '401':
 *           description: Unauthorized User
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Unauthorized User.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Internal Server Error.
 */

router.get("/", validateUser, (req, res) => {
  notesController.getNotes(req, res);
});
/**
 * @swagger
 * paths:
 *   /api/notes:
 *     put:
 *       summary: Update a note
 *       description: Update a note's title and/or content by providing its ID
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: Note gets updated successfully
 *                 updatedNote:
 *                   _id: "60a76a846c3c4a001e266c56"
 *                   title: "Updated Note"
 *                   content: "This note has been updated."
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Invalid id or Incomplete data provided.
 *         '401':
 *           description: Unauthorized User
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Unauthorized User.
 *         '413':
 *           description: Inappropriate message lengths
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Inappropriate message lengths.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Internal Server Error.
 */

router.put("/", validateUser, (req, res) => {
  notesController.updateNote(req, res);
});
/**
 * @swagger
 * paths:
 *   /api/notes/{id}:
 *     delete:
 *       summary: Delete a note by ID
 *       description: Delete a note by providing its ID
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The ID of the note to delete
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: Note deleted successfully
 *                 data:
 *                   _id: "60a76a846c3c4a001e266c56"
 *                   title: "Example Note"
 *                   content: "This is an example note."
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Invalid Id.
 *         '401':
 *           description: Unauthorized User
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Unauthorized User.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Internal Server Error.
 */

router.delete("/:id", validateUser, (req, res) => {
  notesController.deleteNote(req, res);
});
/**
 * @swagger
 * paths:
 *   /api/notes/{id}:
 *     get:
 *       summary: Get a specific note by ID
 *       description: Retrieve a note by providing its ID
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The ID of the note to retrieve
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: Note is found.
 *                 data:
 *                   _id: "60a76a846c3c4a001e266c56"
 *                   title: "Example Note"
 *                   content: "This is an example note."
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Invalid Id.
 *         '401':
 *           description: Unauthorized User
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Unauthorized User.
 *         '404':
 *           description: Note not found
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Note not found.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: Internal Server Error.
 */

router.get("/:id", validateUser, (req, res) => {
  notesController.getNote(req, res);
});
export default router;
