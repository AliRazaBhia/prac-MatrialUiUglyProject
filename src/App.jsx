import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import RightBar from "./Components/RightBar";
import LastBar from "./Components/LastBar";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import { Box, colors, Stack } from "@mui/material";
function App() {
  useEffect(()=>{
    document.body.style.backgroundColor= "#121212"
  })
  return (
    <>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" paddingTop="20px">
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
    </>
  );
}

export default App;
