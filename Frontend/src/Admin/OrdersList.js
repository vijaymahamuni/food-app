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
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../utils/orderSlice";
export default function OrdersList() {
  // const [orderlist, setOrderlist] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [currentsltId, setCurrentsltId] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (e, id, itemid) => {
    setAnchorEl(e.currentTarget);
    setCurrentItemId(itemid);
    setCurrentsltId(id);
    // console.log(id, itemid);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchData = async () => {
    const res = await axios.get(`${REACT_APP_HOST}/api/order/allOrdersdata`);
    // console.log("admin orders list", res.data);

    if (res.data.data.length !== 0) {
      // setOrderlist(res.data.data);
      dispatch(setOrders(res.data.data));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleUpdate = async (value) => {
    // console.log("currseltvalue", value, currentItemId, currentsltId);
    const res = await axios.put(
      `${REACT_APP_HOST}/api/order/updateStatus/${currentsltId}`,
      {
        value,
        currentItemId,
      }
    );
    // console.log("after update status order data", res.data.data);
    const afterUpdateArr = res.data.data;
    //compare prevOrderlist data and currUpdate item and update OrderList in redux
    const updateArr = orderListFRedux.map((item) =>
      item._id === afterUpdateArr._id ? afterUpdateArr : item
    );
    dispatch(setOrders(updateArr));
    // console.log("updateArr", updateArr);
  };
  const orderListFRedux = useSelector((store) => store.order.orders);
  // console.log("orderListFRedux", orderListFRedux);
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
            {orderListFRedux.map((row) => (
              <TableBody key={row._id}>
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
                      <button
                        className={`p-1 w-[120px] mt-2 font-bold rounded-sm text-sm ${
                          item.Status === "Pending"
                            ? " bg-[#f84260]"
                            : item.Status === "Completed"
                            ? "bg-yellow-400"
                            : item.Status === "Out for Delivery"
                            ? "bg-yellow-400"
                            : item.Status === "Delivered"
                            ? "bg-green-700"
                            : "bg-[#f84260]"
                        }   text-white`}
                      >
                        {item.Status}
                      </button>
                      {/* className={`${
                  item.rating > 3 ? "text-green-600" : "text-yellow-600"
                }`} */}
                      {/* <span className="p-[6px] rounded-lg bg-yellow-500 text-white font-bold ">
                        {item.Status}
                      </span> */}
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        id="demo-positioned-button"
                        aria-controls={
                          open ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={(e) => handleClick(e, row._id, item._id)}
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
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            handleUpdate("Pending");
                          }}
                        >
                          Pending
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            handleUpdate("Completed");
                          }}
                        >
                          Completed
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            handleUpdate("Out for Delivery");
                          }}
                        >
                          Out for Delivery
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            handleUpdate("Delivered");
                          }}
                        >
                          Delivered
                        </MenuItem>
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
