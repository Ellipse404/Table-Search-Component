import React, { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import SearchBar from "material-ui-search-bar";

function createHeader(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const raw_data = [
  createHeader("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createHeader("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createHeader("Eclair", 262, 16.0, 24, 6.0),
  createHeader("Cupcake", 305, 3.7, 67, 4.3),
  createHeader("Gingerbread", 356, 16.0, 49, 3.9),
];

const TableDemo = () => {
  // const raw_data = [
  //   { name: "Pizza", calories: "200", fat: "6.0", carbs: "24", protein: "4.0" },
  //   {
  //     name: "Hot Dog",
  //     calories: "300",
  //     fat: "6.0",
  //     carbs: "24",
  //     protein: "4.0",
  //   },
  //   {
  //     name: "Burger",
  //     calories: "400",
  //     fat: "6.0",
  //     carbs: "24",
  //     protein: "4.0",
  //   },
  //   {
  //     name: "Hamburger",
  //     calories: "500",
  //     fat: "6.0",
  //     carbs: "24",
  //     protein: "4.0",
  //   },
  //   { name: "Fries", calories: "600", fat: "6.0", carbs: "24", protein: "4.0" },
  //   {
  //     name: "Ice Cream",
  //     calories: "700",
  //     fat: "6.0",
  //     carbs: "24",
  //     protein: "4.0",
  //   },
  // ];
  const [data, setData] = useState(raw_data);
  const [searchText, setSearchText] = useState();
  const searchInput = (searchValue) => {
    const filterData = raw_data.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchValue.toLowerCase()) ||
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
    setSearchText();
    searchInput(searchText);
  };

  return (
    <React.Fragment>
      <Paper elevation={0} sx={{ padding: "22px" }}>
        <SearchBar
          value={searchText}
          onChange={(searchValue) => searchInput(searchValue)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
};

export default TableDemo;
