import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={{ xs: 0, lg: 1 }}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
}

export default App;
