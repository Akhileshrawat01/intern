import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
// import { Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Normal = ({ properties }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Box sx={{ border: 0 }}>
          <Typography>
            <TableRow>
              <TableCell>
                {Object.keys(properties).map(function (key) {
                  return <option value={key}>{properties[key]}</option>;
                })}
              </TableCell>
            </TableRow>
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default Normal;
