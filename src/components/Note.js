import React from "react";
import { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Note = ({ id, text, index, isLocked, handleDeleteNote, handleLock }) => {
  const colors = ["#e57373", "#7986cb", "#4dd0e1", "#4db6ac", "#fff176"];
  const [currentColor, setCurrentColor] = useState(
    colors[index % colors.length]
  );
  let currentIndex = index;
  function cycleThroughColor() {
    currentIndex++;
    if (currentIndex >= colors.length) {
      currentIndex = 0;
    }
    setCurrentColor(colors[currentIndex]);
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography>{text}</Typography>
        </CardContent>
        <CardActions>
          {/* <Button
            size="small"
            onClick={() => {
              cycleThroughColor();
            }}
            sx={{
              backgroundColor: currentColor,
            }}
          ></Button> */}
          <Button
            size="small"
            onClick={(e) => {
              e.preventDefault();
              handleLock(id, !isLocked);
            }}
            color="primary"
          >
            {isLocked ? "Unlock" : "Lock"}
          </Button>

          {!isLocked && (
            <Button
              size="small"
              onClick={() => {
                handleDeleteNote(id);
              }}
              color="secondary"
            >
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Note;
