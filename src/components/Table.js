import React, { useState } from "react";
import JsonData from "../data.json";
import Table from "@material-ui/core/Table";
import Box from "@material-ui/core/Box";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import DropDown from "./dropdown";
import Normal from "./normal";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  head: {
    backgroundColor: "#000080",
    minWidth: "50px",
  },
  tableContainer: {
    maxHeight: "400px",
  },
  cell: {
    minWidth: "100px",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#00CED1",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#ADD8E6",
    },
  },
}))(TableRow);

function JsonDataDisplay() {
  const classes = useStyles();
  const [showDrop, setShowDrop] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [showMore, setShowMore] = useState(false);

  const closeDropHandler = (bool) => {
    setShowDrop(!bool);
  };

  const DisplayData = JsonData.nodes.map((info) => {
    return (
      <React.Fragment>
        <StyledTableRow>
          <StyledTableCell className={classes.cell} align="middle">
            {/* {Object.keys(info.properties).length===0 ?<DropDown properties={info.properties} onClick={closeDropHandler} />:""}  */}
            {Object.keys(info.properties).length === 1 ? (
              <Normal properties={info.properties} />
            ) : (
              ""
            )}
            {Object.keys(info.properties).length > 1 ? (
              <DropDown
                properties={info.properties}
                onClick={closeDropHandler}
              />
            ) : (
              ""
            )}
          </StyledTableCell>
          <StyledTableCell className={classes.cell} align="center ">
            {info.id}
          </StyledTableCell>
          <StyledTableCell className={classes.cell}>
            {info.name}
          </StyledTableCell>
          <StyledTableCell className={classes.cell}>
            {info.type}
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell className={classes.cell}>
            <Collapse in={open} timeout="auto" unmountOnExit></Collapse>
          </StyledTableCell>
        </StyledTableRow>
      </React.Fragment>
    );
  });

  return (
    <div>
      <Table
        size="small"
        style={{ backgroundColor: "#ADD8E6", color: "white", width: "50%" }}
      >
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell className={classes.head} align="center">
              Properties
            </StyledTableCell>
            <StyledTableCell className={classes.head}>Id</StyledTableCell>
            <StyledTableCell className={classes.head}>Name</StyledTableCell>
            <StyledTableCell className={classes.head}>Type</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>{DisplayData}</TableBody>
      </Table>
    </div>
  );
}

export default JsonDataDisplay;
