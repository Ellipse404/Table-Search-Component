import { Box, Button, Stack } from '@mui/material';
import React, { useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

const useStyle = makeStyles((theme) => ({
  btnClass: {
    width:"6px !important",
    height: "20px !important",
    borderradius: "4px",
    backgroundColor: 'tomato !important'
  },

  stabilizedBox: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "center !important",
    width:"30px !important"
  },

}))

const CounterComponent = ({childToParent}) => {
  const [counter, setCounter] = useState(0)
  const [toggle, setToggle] = useState(false)
  const classes = useStyle()
  //  {if (counter === 0) {
  //    setToggle(true)
  //  } else {
  //    setToggle(false)
  //  }}

  return (
    <React.Fragment>
      <Stack direction="row" className={classes.stabilizedBox} >
      <IconButton aria-label="delete" color="primary"  onClick={(e) => {setCounter(counter - 1); childToParent(counter)} }>
        <DeleteIcon />
      </IconButton>
        <Box sx={{paddingLeft:"4px", paddingRight:"4px"}}>
          {counter}
        </Box>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => {setCounter(counter + 1); childToParent(counter)}}>
        <AddShoppingCartIcon />
      </IconButton>
      </Stack>
    </React.Fragment>
    )
}

export default CounterComponent