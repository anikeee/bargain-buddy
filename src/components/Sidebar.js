import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { fetchProductDataByDepartment } from "./categoryWiseData";

const departments = [
  "Books",
  "Films, TV, Music & Games",
  "Electronics & Computers",
  "Home, Garden, Pets, & DIY",
  "Toys, Children & Baby",
  "Clothes, Shoes, Jewellery and Accessories",
  "Sports & Outdoors",
  "Food & Grocery",
  "Health & Beauty",
  "Car & Motorbike",
  "Business, Industry & Science",
];

export default function Sidebar({
                                  state,
                                  setState,
                                  toggleDrawer,
                                  onDepartmentClick,
                                }) {
  const list = (anchor) => (
      <Box
          sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
          }}
          role="presentation"
          onClick={(event) => toggleDrawer(anchor, false)(event)}
          onKeyDown={(event) => toggleDrawer(anchor, false)(event)}
      >
        <List>
          {["Best Deals", "Most Popular", "Watch list"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => onDepartmentClick(text)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <h3>Shop By Department</h3>
          </ListItem>
          {departments.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                    onClick={async () => {
                      const data = await fetchProductDataByDepartment(text);
                      onDepartmentClick(data);
                      toggleDrawer("left", false)();
                    }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
          ))}
        </List>
      </Box>
  );

  return (
      <div>
        {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
        ))}
      </div>
  );
}
