import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack>
            <TextField
              placeholder="Enter your note here..."
              onChange={handleChange}
              value={noteText}
              multiline
              variant="filled"
            />
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleSaveClick} variant="contained">
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AddNote;
