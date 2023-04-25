import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#2E3B55' }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Ecommerce  Website
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Products
            </Link>
            <Link to="/aboutus" className={classes.link}>
              AboutUs
            </Link>
            <Link to="/Cart" className={classes.link}>
              <ShoppingCartIcon />
            </Link>

          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;