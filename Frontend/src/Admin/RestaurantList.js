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
import { useNavigate } from "react-router-dom";
import RestroDetails from "./RestroDetails";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddRestaurant from "./AddRestaurant";

function RestaurantList() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [showRestroDetails, setShowRestroDetails] = useState(false);
  const [showAddnewRestro, setShowAddnewRestro] = useState(false);
  const ownerId = localStorage.getItem("customerId");
  const userName = localStorage.getItem("userName");
  const fetchData = async () => {
    const resData = await axios.get(
      `${REACT_APP_HOST}/api/owner/getRestrodata/${ownerId}`
    );
    console.log("getList of Restro", resData.data.data);
    setRestaurantList(resData.data.data);
  };
  const navigate = useNavigate();

  const show_Details = () => {
    setShowRestroDetails(!showRestroDetails);
    if (!RestroDetails) {
      navigate("/admin/restaurant/details"); // Navigate after rendering
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Addnew_Restro = () => {
    setShowAddnewRestro(!showAddnewRestro);
  };
  return (
    <div>
      {restaurantList.map((item) => (
        <div className="p-2">
          {showRestroDetails === true ? (
            <div>
              <RestroDetails reslistData={item} showRestrobtn={show_Details} />
            </div>
          ) : showAddnewRestro === true ? (
            <>
              <AddRestaurant showAddnew={Addnew_Restro} />
            </>
          ) : (
            <div>
              <div className="flex justify-between">
                <h1 className="text-xl ">Restaurant List</h1>
                <EditIcon onClick={Addnew_Restro} className="cursor-pointer" />
              </div>
              <div>
                <TableContainer
                  component={Paper}
                  className="mt-4 cursor-pointer"
                >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        {/* <TableCell>Id</TableCell> */}
                        <TableCell align="left">Image</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Emailid</TableCell>
                        <TableCell align="left">City</TableCell>
                        <TableCell align="left">Mobileno</TableCell>
                        <TableCell>OpeningHours</TableCell>
                        <TableCell>Availability</TableCell>
                        <TableCell>Show</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        {/* <TableCell align="left">{item._id}</TableCell> */}
                        <TableCell align="left">
                          <img
                            src={`${REACT_APP_HOST}/` + item.file}
                            alt="img"
                            className="w-10 h-10 rounded-full"
                          />{" "}
                        </TableCell>
                        <TableCell align="left">{item.name}</TableCell>
                        <TableCell align="left">{item.emailid}</TableCell>
                        <TableCell align="left">{item.city}</TableCell>
                        <TableCell align="left">{item.mobileno}</TableCell>
                        <TableCell align="left">{item.openingHours}</TableCell>
                        <TableCell>Open</TableCell>
                        <TableCell align="left" onClick={() => show_Details()}>
                          View
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
