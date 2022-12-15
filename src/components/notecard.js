import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
export default function Notecard({ policy_id, name, status, owner }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        style={{
          width: 200,
          backgroundColor: "orange",
        }}
      >
        Policy ID: {policy_id}<br></br>
        Name: {name}<br></br>
        Status: {status}<br></br>
        Owner: {owner}<br></br>
      </Card>
    </Box>
  )
}
