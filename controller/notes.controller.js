import Notes from "../model/notes.schema.js";
import mongoose from "mongoose";
export default class NotesController {
  async addNote(req, res) {
    try {
      const { title, content } = req.body;
      if (!title || !content) {
        return res
          .status(400)
          .json({ status: false, message: "Invalid Data." });
      }
      if (title.length <= 50 && content.length <= 50) {
        const newNote = await Notes.create({
          title: title,
          content: content,
        });
        if (newNote) {
          return res.status(200).json({
            success: true,
            message: "Note added successfully.",
            data: newNote,
          });
        }
      } else {
        return res
          .status(413)
          .json({ status: false, message: "Inappropriate message lengths." });
      }
    } catch (err) {
      res
        .status(500)
        .json({ status: false, message: "Internal Server Error." });
      console.log("Error occured while creating a Note.", err);
    }
  }
  async getNotes(req, res) {
    try {
      const notes = await Notes.find({});
      if (notes) {
        return res.status(200).json({
          status: true,
          message: "Data retrived successfully.",
          data: notes,
        });
      }
    } catch (err) {
      res
        .status(500)
        .json({ status: false, message: "Internal Server Error." });
      console.log("Error occured while retrieving all Notes.", err);
    }
  }
  async deleteNote(req, res) {
    try {
      const { id } = req.params;
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: false, message: "Invalid Id." });
      }

      const deletedNote = await Notes.findByIdAndDelete(id);
      if (deletedNote) {
        return res.status(200).json({
          success: false,
          message: "Note deleted successfully/",
          data: deletedNote,
        });
      } else {
        return res.status(400).json({ success: false, message: "Invalid Id." });
      }
    } catch (err) {
      res
        .status(500)
        .json({ status: false, message: "Internal Server Error." });
      console.log("Error occured while deleting a Note.", err);
    }
  }
  async updateNote(req, res) {
    try {
      const { title, content, id } = req.body;
      if (!id && !title && !content) {
        return res.status(400).json({ status: false, message: "Invalid id." });
      }
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: false, message: "Invalid Id." });
      }
      if ((title && title.length > 50) || (content && content.length > 50)) {
        return res
          .status(413)
          .json({ status: false, message: "Inappropriate message lengths." });
      }
      let updatedNote = await Notes.findById(id);
      if (updatedNote) {
        if (title) {
          updatedNote.title = title;
        }
        if (content) {
          updatedNote.content = content;
        }
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Note Id." });
      }
      updatedNote = await updatedNote.save();
      res.status(200).json({
        status: true,
        message: "Note gets updated successfully",
        updatedNote,
      });
    } catch (err) {
      res
        .status(500)
        .json({ status: false, message: "Internal Server Error." });
      console.log("Error occured while updating the Note.", err);
    }
  }
  async getNote(req, res) {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: false, message: "Invalid Id." });
      }
      const note = await Notes.findById(id);
      if (note) {
        return res
          .status(200)
          .json({ status: true, message: "Note is found.", data: note });
      } else {
        res.status(400).json({ status: false, message: "Note not found." });
      }
    } catch (err) {
      res
        .status(500)
        .json({ status: false, message: "Internal Server Error." });
      console.log("Error occured while getting a specific Note.", err);
    }
  }
}
