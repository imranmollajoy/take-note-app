import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { Grid, Container } from "@mui/material";
import Masonary from "@mui/lab/Masonry";
const NoteList = ({ notes, handleAddNote, handleDeleteNote, handleLock }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Masonary columns={3} spacing={1}>
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            isLocked={note.isLocked}
            handleLock={handleLock}
            handleDeleteNote={handleDeleteNote}
            sx={{
              height: "100%",
            }}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </Masonary>
    </Container>
  );
};

export default NoteList;
