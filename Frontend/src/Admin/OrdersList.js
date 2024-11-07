import axios from "axios";
import React, { useEffect, useState } from "react";
import { REACT_APP_HOST } from "../utils/Host_pass";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export default function OrdersList() {
  const [orderlist, setOrderlist] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const fetchData = async () => {
    const res = await axios.get(`${REACT_APP_HOST}/api/order/allOrdersdata`);
    console.log("admin orders list", res.data.data);

    if (res.data.data.length !== 0) {
      setOrderlist(res.data.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-playfair text-xl">Order Status</h1>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          className="mt-3"
        >
          <FormControlLabel
            value="all"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#f84260", // Checked color
                  },
                }}
              />
            }
            label="All"
          />
          <FormControlLabel
            value="burger"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#f84260", // Checked color
                  },
                }}
              />
            }
            label="Pending"
          />
          <FormControlLabel
            value="chicken"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#f84260", // Checked color
                  },
                }}
              />
            }
            label="Completed"
          />
          <FormControlLabel
            value="dosa"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#f84260", // Checked color
                  },
                }}
              />
            }
            label="Delivered"
          />
        </RadioGroup>
      </div>
      <div className="mt-2">
        <h1 className="font-playfair text-xl">All Orders</h1>
      </div>
      <div>
        <TableContainer component={Paper} className="mt-4">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Customer</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Ingredient</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
              </TableRow>
            </TableHead>
            {orderlist.map((row) => (
              <TableBody>
                {row.orderItems.map((item) => (
                  <TableRow
                    key={item._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item._id}
                    </TableCell>
                    <TableCell>
                      <img
                        src={`${REACT_APP_HOST}/` + item.file}
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />{" "}
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>₹{item.price}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="left">{item.ingredient}</TableCell>
                    <TableCell align="left">
                      <span className="p-[6px] rounded-lg bg-yellow-500 text-white font-bold">
                        {item.Status}
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        id="demo-positioned-button"
                        aria-controls={
                          open ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        STATUS
                      </Button>
                      <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        <MenuItem onClick={handleClose}>Pending</MenuItem>
                        <MenuItem onClick={handleClose}>Completed</MenuItem>
                        <MenuItem onClick={handleClose}>
                          Out for Delivery
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Delivered</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
