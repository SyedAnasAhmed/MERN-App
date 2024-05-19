import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";

export default function AccordionUsage() {
  return (
    <Box>
      <Accordion
        sx={{
          width: 1150,
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h6" sx={{ fontWeight: "400" }}>
            Accordion Actions
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button variant="outlined">
            {" "}
            <EditIcon /> Edit
          </Button>
          <Button variant="contained" color="error">
            {" "}
            <DeleteOutlineIcon /> Delete
          </Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
}
