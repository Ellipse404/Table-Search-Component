import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Button,
} from "@mui/material";
import React,{useEffect} from "react";
import { createStyles, makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  tableContainer: {
    marginTop: "22px",
    border: "0.5px solid grey",
  },

  tableHeader: {
    backgroundColor: "rgb(130, 194, 183)",
  },

  btnAdd: {
    borderRadius: "6px !important",
    background: "rgb(107, 21, 54) !important",
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },
}));

const CardData = (props) => {

  const classes = useStyle();
  useEffect(() => {
    return () => {
      // cleanup
  }
  },[]);

  const deleteRow = (i) =>{
    console.log('---------------->',props.core_data.filter((item, idx)=>idx !== i))
    let temp = props.core_data.filter((item, idx)=>idx !== i);
    props.setCardData(temp)
  }

  console.log('props.core_data---->',props.core_data);
  return (
    <React.Fragment>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
              <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.core_data.map((row1,i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row1.name}
                </TableCell>
                <TableCell align="center">{row1.calories}</TableCell>
                <TableCell align="center">{row1.fat}</TableCell>
                <TableCell align="center">{row1.carbs}</TableCell>
                <TableCell align="center">{row1.protein}</TableCell>
                <TableCell align="center">
                  <Button className={classes.btnAdd}
                  onClick={(e) =>{ 
                    deleteRow(i);
                  }}
                  >
                    <Typography className={classes.btnText}>Del</Typography>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default CardData;
