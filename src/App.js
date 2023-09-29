import React from "react";
import { Card, CardContent } from "@mui/material";
import { Home } from "./components/Home";
import "./components/common.css";

function App() {
  return (
   <Card sx={{height: 590, bgcolor: "pink"}}>
    <CardContent>
      <Home />
    </CardContent>
   </Card>
  );
}

export default App;
