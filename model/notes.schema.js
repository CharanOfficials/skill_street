import mongoose from "mongoose";
const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Notes = mongoose.model("notes", notesSchema);
export default Notes;
