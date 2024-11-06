import axios from "axios";
import React, { useEffect, useState } from "react";
import { REACT_APP_HOST } from "../utils/Host_pass";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

const OrdersList = () => {
  const [orderlist, setOrderlist] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`${REACT_APP_HOST}/api/order/allOrdersdata`);
    setOrderlist(res.data.data[0].orderItems);
    console.log("admin orders list", res.data.data[0].orderItems);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-normal text-xl">All Orders</h1>
        </div>
      </div>
      <TableContainer component={Paper} className="mt-8">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Image </TableCell>
              <TableCell>Customer </TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ingredient</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderlist.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row._id}</TableCell>

                <TableCell component="th" scope="row">
                  <img
                    src={`${REACT_APP_HOST}/` + row.file}
                    alt="img"
                    className="w-10 h-10 rounded-full"
                  />{" "}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>₹{row.price}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.ingredient}</TableCell>
                <TableCell>
                  <h1>Pending</h1>
                </TableCell>

                <TableCell>Status</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <input type="file" />
    </div>
  );
};

export default OrdersList;
