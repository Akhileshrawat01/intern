import React from 'react'
import JsonData from '../data.json'
import Table from "@material-ui/core/Table";
import { styled } from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    head: {
        backgroundColor: "#fff",
        minWidth: "50px"
    },
    tableContainer: {
        maxHeight: "400px"
    },
    cell: {
        minWidth: "100px"
    }
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));
// for (var i = 0; i < info.properties.length; i++){
//     var obj = info.properties[i];
//     for (var key in obj){
//         <StyledTableCell className={classes.cell}>obj[key]</StyledTableCell>
//     }
// }


function JsonDataDisplay() {
    const classes = useStyles();
    const DisplayData = JsonData.nodes.map(
        (info) => {
            return (
                <StyledTableRow>
                    <StyledTableCell className={classes.cell} align="middle">{info.id}</StyledTableCell>
                    <StyledTableCell className={classes.cell}>{info.name}</StyledTableCell>
                    <StyledTableCell className={classes.cell}>{info.type}</StyledTableCell>

                </StyledTableRow>
            )
        }
    )

    return (
        <div>


            <Table size="small" style={{ backgroundColor: 'white', color: 'white', width: '50%' }}>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                </colgroup>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell className={classes.head}>Id</StyledTableCell>
                        <StyledTableCell className={classes.head}>Name</StyledTableCell>
                        <StyledTableCell className={classes.head}>Type</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>


                    {DisplayData}

                </TableBody>

            </Table>


        </div>
    )
}

export default JsonDataDisplay;
