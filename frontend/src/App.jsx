import { Box, Container, Stack, Typography } from "@mui/material";
import "./App.css";
import AccordionUsage from "./Components/Card";
import BasicModal from "./Components/Modal";

function App() {
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

            <div>
              <AccordionUsage />
            </div>
          </Container>
        </Stack>
      </div>
    </>
  );
}

export default App;
