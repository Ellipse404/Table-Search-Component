import React, { useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import TableContainer from "@mui/material/TableContainer";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Box,
  Button,
  Typography,
} from "@mui/material";
import SearchBar from "material-ui-search-bar";
import CardData from "./CardData";
// import raw_data from './data.json' // for .json usage

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

function createHeader(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
// comment this [24-34] while using json data
const raw_data = [
  createHeader("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createHeader("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createHeader("Eclair", 262, 16.0, 24, 6.0),
  createHeader("Cupcake", 305, 3.7, 67, 4.3),
  createHeader("Gingerbread", 356, 12.0, 49, 3.8),
  createHeader("Jell-O", 306, 46.0, 69, 1.9),
  createHeader("Brownies", 319, 22.0, 79, 2.6),
  createHeader("Carrot Cake", 346, 11.0, 29, 4.9),
  createHeader("Cheesecake", 256, 14.0, 39, 3.8),
];

const TableDemo = () => {
  const classes = useStyle();
  const [data, setData] = useState(raw_data);
  const [searchText, setSearchText] = useState("");
  const [cardData, setCardData] = useState([]);
  const searchInput = (searchValue) => {
    const filterData = raw_data.filter((row) => {
      return (
        row.name.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
        row.calories
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        row.fat.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
        row.carbs
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        row.protein.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setData(filterData);
  };

  const cancelSearch = () => {
    setSearchText("");
    searchInput(searchText);
  };

  return (
    <React.Fragment>
      <Paper elevation={0} sx={{ padding: "22px" }}>
        <Box className={classes.rightCentered}>
          <Box className={classes.searchBar}>
            <SearchBar
              value={searchText}
              onChange={(searchValue) => searchInput(searchValue)}
              onCancelSearch={() => cancelSearch()}
            />
          </Box>
        </Box>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Calories</TableCell>
                <TableCell align="center">Fat&nbsp;(g)</TableCell>
                <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                <TableCell align="center">Protein&nbsp;(g)</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row,i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                  <TableCell align="center">
                    <Button
                      className={classes.btnAdd}
                      onClick={(e) => setCardData([...cardData, row])}
                    >
                      <Typography className={classes.btnText}>Add</Typography>
                    </Button>
                    {/* {console.log("row------>", row)} */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper elevation={0} sx={{ padding: "22px", marginBottom: "50px" }}>
        <CardData core_data={cardData} setCardData={setCardData} />
      </Paper>
    </React.Fragment>
  );
};

export default TableDemo;
