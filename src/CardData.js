import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";
import { createStyles, makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  rightCentered: {
    display: "flex",
    width: "100%",
    justifyContent: "right",
    alignItems: "center",
  },
  searchBar: {
    width: "50%",
  },

  tableContainer: {
    marginTop: "22px",
    border: "0.5px solid grey",
  },

  tableHeader: {
    backgroundColor: "rgb(176, 166, 222)",
  },

  btnAdd: {
    borderRadius: "6px !important",
    background: "rgb(150, 230, 23) !important",
  },

  btnText: {
    color: "black",
    fontWeight: "bold",
  },
}));

const CardData = (props) => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead sx={{ backgroundColor: "purple" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
              <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.core_data.map((row1) => (
              <TableRow
                key={row1.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row1.name}
                </TableCell>
                <TableCell align="center">{row1.calories}</TableCell>
                <TableCell align="center">{row1.fat}</TableCell>
                <TableCell align="center">{row1.carbs}</TableCell>
                <TableCell align="center">{row1.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default CardData;
