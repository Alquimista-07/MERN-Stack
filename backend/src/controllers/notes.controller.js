const NoteModel = require('../models/Note');

const notesCtrl = {};

notesCtrl.getNotes = async (req, res) => {

    // Devolvemos todas las notas
    const notes = await NoteModel.find();

    res.json({
        notes
    });
};

notesCtrl.getNote = async (req, res) => {

    const id = (req.params.id);

    const note = await NoteModel.findById(id);

    console.log(note);

    res.json({
        note
    });
};

notesCtrl.createNote = async (req, res) => {

    const { title, content, date, author } = req.body;

    const newNote = new NoteModel({
        title,
        content,
        date,
        author
    });

    await newNote.save();

    res.json({
        message: "Nota Guardada"
    });
};

notesCtrl.updateNote = async (req, res) => {

    const id = req.params.id;
    const { title, content, author } = req.body;

    await NoteModel.findOneAndUpdate( { _id: id }, {
        title,
        content,
        author
    });

    res.json({
        message: 'Nota actualizada!'
    });
};

notesCtrl.deleteNote = async (req, res) => {
    
    const id = req.params.id;

    await NoteModel.findByIdAndDelete(id);

    res.json({
        message: 'Nota borrada!'
    });
};


module.exports = notesCtrl;