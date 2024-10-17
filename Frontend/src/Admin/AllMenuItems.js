import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { REACT_APP_HOST } from "../utils/Host_pass";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import AddMenuItem from "./AddMenuItem";
const AllMenuItems = () => {
  const [menuList, setMenuList] = useState([]);
  const [showAddmenu, setShowAddmenu] = useState(false);
  const ownerId = localStorage.getItem("customerId");
  console.log("resId", ownerId);
  const fetchData = async () => {
    const resData = await axios.get(
      `${REACT_APP_HOST}/api/menu/AllMenulist/${ownerId}`
    );
    console.log("getList of menu", resData.data.data);
    setMenuList(resData.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
  const addNewMenu = () => {
    // navigate("/admin/addrestaurant");
    setShowAddmenu(!showAddmenu);
  };

  return (
    <div>
      {showAddmenu === false ? (
        <>
          <div className="flex justify-between">
            <div>
              <h1 className="font-normal text-xl">All Menu Items Dashboard</h1>
            </div>

            <div>
              <EditIcon className="cursor-pointer" onClick={addNewMenu} />
            </div>
          </div>
          <TableContainer component={Paper} className="mt-8">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image </TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Ingredient</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Availabilty</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menuList.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={`${REACT_APP_HOST}/` + row.file}
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />{" "}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.ingredient}</TableCell>
                    <TableCell>₹{row.price}</TableCell>
                    <TableCell>
                      <h1>IN STOCK</h1>
                    </TableCell>
                    <TableCell>
                      <DeleteIcon className="text-[#f84260]" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Link to={"/admin/restaurant/menu"}>
          <AddMenuItem />
        </Link>
      )}
    </div>
  );
};

export default AllMenuItems;
