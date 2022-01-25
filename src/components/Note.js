import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const Note = ({ id, text, isLocked, handleDeleteNote, handleLock }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography>{text}</Typography>
        </CardContent>

        <CardActions>
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
