import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography, Stack } from "@mui/material";
import { BASE_URL } from "../../config";

export default function AccordionUsage(props) {
  
  const deleteButton = async() =>{
    const url = `${BASE_URL}/api/products/${id}`;
    await axios.delete(url);
    fetchData();
  }

  return (
    <Box>
      <Accordion sx={{ width: 1150 , marginTop: 5 }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "400" }}>
            {props.heading}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" size="small" startIcon={<EditIcon />}>
              Edit
            </Button>
            <Button variant="contained" color="error" size="small" startIcon={<DeleteOutlineIcon />}
            onClick={deleteButton}>
              Delete
            </Button>
          </Stack>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
           {props.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
