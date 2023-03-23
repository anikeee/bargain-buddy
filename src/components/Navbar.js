import React, { useCallback, useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "./LoginButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Sidebar from "./Sidebar";
import SavedItems from "./SavedItems";

const Navbar = ({ onDepartmentSearch }) => {
  const [drawerState, setDrawerState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BargainBuddy
            </Typography>
            <Box
                sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
            >
              <LoginButton />
            </Box>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Sidebar
            state={drawerState}
            setState={setDrawerState}
            toggleDrawer={toggleDrawer}
            onDepartmentClick={onDepartmentSearch}
        />
      </>
  );
};

export default Navbar;
