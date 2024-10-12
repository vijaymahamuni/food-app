import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function RestroMenus() {
  return (
    <div className=" w-11/12 mx-auto flex">
      <div className="mt-4 w-[18%] bg-gray-50 p-6">
        <div>
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              style={{
                fontSize: "18px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Food Type
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              className="mt-3 border-b-2"
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
                value="vegetarian only"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Vegetarian Only"
              />
              <FormControlLabel
                value="non-vegetarian only"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Non-vegetarian Only"
              />
              <FormControlLabel
                value="seasonal"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#f84260", // Checked color
                      },
                    }}
                  />
                }
                label="Seasonal"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="mt-6">
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              style={{
                fontSize: "18px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Food Category
            </FormLabel>
            <RadioGroup
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
                label="Burger"
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
                label="Chicken"
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
                label="Dosa"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="w-10/12 p-5">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              <h1>Burger</h1>
              <h1>Rs.300</h1>
              <h1>4.3 star</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default RestroMenus;
