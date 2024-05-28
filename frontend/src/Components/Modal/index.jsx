import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CircularProgress, Stack, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [getpost, setposts] = useState([]);
  const handleOpen = () => setOpen(true);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!heading || !description) {
      alert("Required fields are missing");
      return;
    }

    setLoading(true);

    try {
      const obj = {
        heading,
        description,
        userID: "101",
      };
      const create = await axios.post(`${BASE_URL}/api/products`, obj);
      setposts((prevPosts) => [...prevPosts, create]);
      console.log("create", create);
    } catch (error) {
      console.log("error", error.response);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mb: 5 }}
        onClick={handleOpen}
      >
        Create a TODO
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Create a TODO
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ marginBottom: 3 }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter TODO Heading"
                  variant="outlined"
                  fullWidth
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <TextField
                  id="outlined-basic"
                  label="Enter TODO Description"
                  variant="outlined"
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Typography>
              <Stack
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="flex-end"
                mt={4}
              >
                <Button
                  variant="outlined"
                  color="success"
                  type="button"
                  onClick={submitHandler}
                >
                  Create Post
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
