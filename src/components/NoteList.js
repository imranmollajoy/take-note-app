import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { Grid, Container } from "@mui/material";
const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={1}>
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </Grid>
    </Container>
  );
};

export default NoteList;
