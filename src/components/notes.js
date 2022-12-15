import React, { useState } from "react";
import JsonData from "../ncard.json";
import Notecard from "./notecard";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function Notes() {
  const [selected, setSelected] = useState("");
  const [status,setStatus] = useState(JsonData.policies);
  function handleChange(event) {
    setSelected(event.target.value);
    let _vals = event.target.value
      ? JsonData.policies.filter(r => r.status === event.target.value)
      : JsonData.policies;
    setStatus(_vals);
  }

  return (
    <div>
      <Select
        style={{ width: 200, marginLeft: 1200 }}
        value={selected}
        onChange={handleChange}
        name="country"
        displayEmpty
      >
        <MenuItem value="">Select Status</MenuItem>
        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
        <MenuItem value="IN-ACTIVE">IN-ACTIVE</MenuItem>
        <MenuItem value="TERMINATED">TERMINATED</MenuItem>
      </Select>
      <Container>
        <Grid container spacing={3}>
          {status.map((info) => (
            <Notecard
              policy_id={info.policy_id}
              name={info.name}
              status={info.status}
              owner={info.owner}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
