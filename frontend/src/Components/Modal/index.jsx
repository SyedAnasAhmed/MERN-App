import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack, TextField } from "@mui/material";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom:3}} >
            <TextField
              id="outlined-basic"
              label="Enter TODO heading"
              variant="outlined"
              fullWidth
              
            />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <TextField
              id="outlined-basic"
              label="Enter TODO Description"
              variant="outlined"
              fullWidth
            />
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center" justifyContent="flex-end" mt={4}>
            <Button variant="contained" color="success">Create Post</Button>
            <Button variant="outlined" color="error">Cancel</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
