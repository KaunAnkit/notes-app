const express = require("express");
const cors = require("cors");

const Note = require("./models/note");
const connectDB = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.post("/notes", async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      content: req.body.content
    });

    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.delete("/notes/:id", async (req, res) => {
  const deleted = await Note.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.json({ message: "Note deleted" });
});

app.put("/notes/:id", async (req,res) => {

  try{
    const updated = await Note.findByIdAndUpdate(
      req.params.id,

      {
      title : req.body.title,
      content : req.body.content
      },
      {
        new : true,
        runValidators : true
      }
    );

    if(!updated){
      return res.status(404).json({"error": "mila ni note"})
    }

    res.json(updated)
    
  }catch(err){
    res.status(400).json({"error": err.message})
  }

})



const startServer = async () => {
  await connectDB();

  app.listen(5500, () => {
    console.log("server running on 5500");
  });
};

function startEdit(id, title, content) {
  editingId = id.trim();   
  document.getElementById("title").value = title;
  document.getElementById("content").value = content;
}


startServer();
