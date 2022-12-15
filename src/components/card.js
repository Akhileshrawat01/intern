import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import { stockData } from "../data";
import usersData from '../users.json'   

const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })

    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
}

const exportToJson = e => {
    e.preventDefault()
    downloadFile({
        data: JSON.stringify(usersData.users),
        fileName: 'users.txt',
        fileType: 'text/json',
    })
}

// const exportToCsv = e => {
//     e.preventDefault()

//     // Headers for each column
//     let headers = ['Id,Name,Surname,Age']

//     // Convert users data to a csv
//     let usersCsv = usersData.users.reduce((acc, user) => {
//         const { id, name, surname, age } = user
//         acc.push([id, name, surname, age].join(','))
//         return acc
//     }, [])

//     downloadFile({
//         data: [...headers, ...usersCsv].join('\n'),
//         fileName: 'users.csv',
//         fileType: 'text/csv',
//     })
// }

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Cardcomponent() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        // setOpen(true);
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{}}>
            <Card
                style={{
                    width: 200,
                    backgroundColor: "orange",
                }}
                onClick={handleOpen}
                onClose={handleClose}
            >
                <CardActions >
                {open ? <Modal />:null}
                <CardContent>
                    <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    >
                        Greetings of the day
                    </Typography>
                    <Typography variant="h5" component="h2">
                        How are you ?
                    </Typography>
                    <Typography
                        style={{
                            marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                    <Typography variant="body2" component="p">
                        Stay Happy
                    </Typography>
                </CardContent>
                
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 100,
                        }}
                    >
                        <Fade in={open}>
                            {/* <div className={classes.paper}>
                                {stockData.map((data, key) => {
                                    return (
                                        <div key={key}>
                                            {data.company + "," + data.ticker + "," + data.timeElapsed}
                                        </div>
                                    )
                                })

                                }
                            </div> */}
                            <div className={classes.paper}>
                                {usersData.users.map(user => {
                                    const { id, name, surname, age } = user
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{surname}</td>
                                            <td>{age}</td>
                                        </tr>
                                    )
                                })}
                                <br></br>
                            <Button type='button' variant="contained" color="primary" onClick={exportToJson}>
                                Download
                            </Button>
                            {/* <Button type='button' onClick={exportToCsv}>
                                Export to CSV
                            </Button> */}
                            </div>

                        </Fade>
                    </Modal>
                    {/* <Button size="small">Stay Safe.....</Button> */}

                </CardActions>
            </Card >
        </div>
    );
}
