import { Box, Container, Stack, Typography } from "@mui/material";
import "./App.css";
import AccordionUsage from "./Components/Card";
import BasicModal from "./Components/Modal";
import { useState } from "react";

function App() {

  const [ todos , setTodos]  = useState();





  return (
    <>
      <div className="maindiv" >
        <Stack>
          <Container fixed>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                margin={8}
                sx={{ color: "white" }}
                fontWeight={600}
              >
                TODO LIST
              </Typography>
            </Box>

            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <BasicModal />
            </Box>

            {/* <div>
              {
                todos.length === 0
                ? 
                <h2>NO TODO'S CREATED</h2> 
                : 
                todos.map(todo => (
                  <AccordionUsage />
                ))
              }
            </div> */}
          </Container>
        </Stack>
      </div>
    </>
  );
}

export default App;
