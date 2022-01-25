import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { red, teal } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: teal,
    secondary: red,
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
  },
});
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Lorem ipsum a dummy note",
    },
  ]);
  //get the notes from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("note-taking-app-data-imo141")
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("note-taking-app-data-imo141", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    setNotes([...notes, { id: nanoid(), text }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NoteList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </ThemeProvider>
  );
}

export default App;
