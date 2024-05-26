import { Box, Container, Stack, Typography } from "@mui/material";
import "./App.css";
import AccordionUsage from "./Components/Card";
import BasicModal from "./Components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./config";

function App() {
  
  const [ getposts , setposts] = useState([])

  const fetchdata = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/products/`);
      console.log(response.data);
      setposts(response.data)

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="maindiv">
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
            {
              getposts?.map((getposts)=>{
                return(
                  
                  <AccordionUsage key={getposts.id} heading={getposts.heading} description={getposts.description} />
                )
              })
            }
          </Container>
        </Stack>
      </div>
    </>
  );
}

export default App;
