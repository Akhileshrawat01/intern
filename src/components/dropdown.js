import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
// import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
// import { Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "../App.css";
// import ShowMoreText from "react-show-more-text";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  head: {
    backgroundColor: "#fff",
    minWidth: "50px",
  },
  tableContainer: {
    maxHeight: "400px",
  },
  cell: {
    minWidth: "100px",
  },
  customBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  but: {
    backgroundColor: "#00CED1",
  },
}));

const Button = styled.button`
  background-color: #add8e6;
  color: black;
  font-size: 22px;
  padding: 0px 0px;
  margin: 0px 0px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #66ccff;
  }
`;

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white
//     },
//     body: {
//         fontSize: 14
//     }
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         "&:nth-of-type(odd)": {
//             backgroundColor: theme.palette.action.hover
//         }
//     }
// }))(TableRow);

const DropDown = ({ properties, onClick }) => {
  const classes = useStyles();
  console.log("in dropdown", properties);
  const [open, setOpen] = React.useState(false);
  const [showMore, setShowMore] = useState(null);

  const clickHandler = () => {
    setOpen((prev) => !prev);
    onClick(open);
  };
  const styleObj = {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          style={{ position: "relative", paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={clickHandler}
          >
            {Object.keys(properties)
              .slice(0, 1)
              .map(function (key) {
                return (
                  <div style={styleObj}>
                    <option value={key}>{properties[key]}</option>
                  </div>
                );
              })}
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit hidden={!open}>
            <Typography>
              <Box>
                {open ? (
                  <TableRow>
                    <TableCell>
                      {Object.keys(properties)
                        // .slice(0, showMore ? properties.length : 1)
                        .slice(1)
                        .map(function (key) {
                          return (
                            <div>
                              <option value={key}>{properties[key]}</option>
                            </div>
                          );
                        })}{" "}
                    </TableCell>{" "}
                  </TableRow>
                ) : (
                  ""
                )}
              </Box>
            </Typography>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default DropDown;
