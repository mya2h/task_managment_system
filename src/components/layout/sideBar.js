import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {List,ListItem,ListItemText} from "@material-ui/coret";
import { NavLink ,Link} from 'react-router-dom';
import {DashboardIcon,ListItemIcon,FileCopyIcon,LocalActivityIcon,DevicesOtherIcon} from "@material-ui/icons";
const theme = createMuiTheme({
  typography: {
    fontSize: 13,
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  flexGrow: 1,
  flexshrink: 1,
  flexBasis: 'auto'
});
const useStyles = makeStyles((theme) => ({
  sideNav: {
    width: "100%",
    maxWidth: 300,
    marginTop: 42,
    color: "#d1d1d1",
  },
  nested: {
    paddingLeft: 44,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  icon: {
    color: "#d1d1d1",
  },
}));

const SideNav = () => {
  const classes = useStyles();
  const [openSide, setOpenSide] = React.useState(null);
  const [openReport, setOpenReport] = React.useState(null);
  const [selectedIndex, setSelected] = React.useState(0)
  const handleClick = () => {
    setOpenSide(!openSide);
  };
  const handleOrder = () => {
    setOpenReport(!openReport);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.sideNav}
        activeclassname="active"
      >
        <NavLink
          to="/admin/dashboard"
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
        >
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="All Tickets" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/resource"
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}
        >
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary="New Tickets" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/device"
          className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)'}}
        >
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <DevicesOtherIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets In Progress" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/suspiciousActvities"
           className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets of Hold" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/suspiciousActvities"
           className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets of Hold" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/suspiciousActvities"
           className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets Closed" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/suspiciousActvities"
           className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets Odler than 3 days" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/suspiciousActvities"
           className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets Opened Today" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/suspiciousActvities"
           className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ color: 'rgb(253, 184, 81)' }}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon className={classes.icon}>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets Closed Today" />
          </ListItem>
        </NavLink>
      </List>
    </MuiThemeProvider>

  );
};

export default SideNav

