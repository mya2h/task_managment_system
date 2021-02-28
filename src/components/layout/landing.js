import React,{useEffect} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {Drawer,MenuIcon,Avatar,CssBaseline,Badge,Divider,Typography,IconButton,AppBar,Toolbar,MenuItem,Paper,Grid,Menu,Popover} from "@material-ui/core";
// import image from '../../assets/images/ad.png'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Switch,Redirect,Route,} from "react-router-dom";
import {ChevronLeftIcon,NotificationsIcon} from "@material-ui/icons";
import SideNav from "./sideBar";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  rootNotification: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paperNotification: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor:'rgba(65, 63, 63, 0.030)'
  },
  paperNotificationSeen: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    // backgroundColor:'rgba(65, 63, 63, 0.030)'
  },
  // popup:{
  //   backgroundColor:'rgba(65, 63, 63, 0.030)'
  // },
  toolbar: {},
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  side: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    // overflowY:'hidden'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "rgb(255, 255, 255)",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.18)",
    
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    float: "left",
  },
  notifyicon: {
    float: "right",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "normal",
    lineHeight: "30px",
       color: "#fff",
  },
  span: {
    fontSize: 33,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: "30px",
    color: "#b3d8fd",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "#1A2038",
    height: '100vh',
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    paddingTop: theme.spacing(9),
    overflow: "auto",
    backgroundColor: "rgba(65, 63, 63, 0.030)",
  },
  container: {
    paddingBottom: theme.spacing(4),
  },
  margin: {
 
  },
  customBadge: {
    backgroundColor: "rgb(255, 175, 56)",
    color: "white"
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    minHeight: 570,
  },
  icon: {
    color: "white",
  },
}));
const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};
const Dashboard = ({auth:{isAuthenticated,token,role},addToSeen,logout,getNotification,notify:{notification,count}}) => {
  useEffect(() => {
    getNotification()
  }, [])
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const switchRoute = (
    <Switch>
      {/* <Route exact path="/admin/dashboard" component={GraphInfo} />
      <Redirect from="/admin" to="/admin/dashboard" /> */}
    </Switch>
  );
  const handleDrawerClose = () => {
    console.log(window.location.pathname)
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNotification, setAnchorNotififcation] = React.useState(null);
  const [notifications,setNotification] = React.useState([
    {
      message:`DeviceUser Desktop12 is delete file.js at time 3:12 2020/12/04.`,
      seen:false
    },
    {
      message:`DeviceUser Desktop12as is watching Youtube.com at time 3:12 2020/12/04`,
      seen:false
    },
    {
      message:`DeviceUser Desktop12as is watching Syber.exe at time 3:12 2020/12/04`,
      seen:true
    }
  ])
  const handleClick = (event) => {
    setAnchorNotififcation(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorNotififcation(null);
  };
  const handleNotification = (item,index) =>{
    // notifications[index].seen = true
    addToSeen(item._id)
    console.log(notifications)
  }
  const handleLogout = ()=>{
    logout()
  }
  const openNotification = Boolean(anchorNotification);
  const id = openNotification ? 'simple-popover' : undefined;
  
  if (token == null) {
    return (
      <Redirect to="/" />
    )
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <IconButton style={{ marginLeft: "90%" }} onClick={handleClick}>
            <Badge badgeContent={count} color="primary" 
            classes={{ badge: classes.customBadge }}
        className={classes.margin} >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Popover
        id={id}
        anchorReference="anchorPosition"
       
        open={openNotification}
        anchorPosition={{ top: 30, left: 850 }}
        anchorEl={anchorNotification}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div  className={classes.popup}>
        {notification != null && notification.length > 0 && notification.map((item,index)=>(
          <div >
               {item.seen == true && 
               <div>
                      {/* <Link to="" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick = {()=> handleNotification(item,index)}> */}
                      <Paper className={classes.paperNotificationSeen} elevation={0}>
                          <Grid container wrap="nowrap" spacing={2}>
                           <Grid item xs>
                             {/* {item.deviceUser !=null&&( */}
                                <Typography>Un intended actvity App {item.app} title {item.title} host {item.host} is done</Typography>
                             {/* )} */}
                            
                           </Grid>
                          
                         </Grid>
                       </Paper>
                      {/* </Link> */}
                        <Divider light/>
                        </div>
               }
               {item.seen == false && 
               <div>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} onClick = {()=> handleNotification(item,index)}> 
                      <Paper className={classes.paperNotification} elevation={0}>
                          <Grid container wrap="nowrap" spacing={2}>
                           <Grid item xs>
                           <Typography>{item.app} title {item.title} host {item.host}</Typography>
                           </Grid>
                          
                         </Grid>
                       </Paper>
                      </Link>
                        <Divider light/>
                        </div>
               }
              </div>
            
        ))}
          </div>
      </Popover>
          <IconButton onClick={handleProfile}>
              <br />
              <div className={classes.title}>
              </div>
              {/* <Person /><ArrowDropDownIcon /> */}
              <Avatar alt="Remy Sharp" src={image} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {role == 'SuperAdmin'&&(
                <Link  to="/admin/profile" variant='body2' style={{ color: 'inherit', textDecoration: 'inherit' }}> <MenuItem >Profile</MenuItem></Link>
              )}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Typography
            component="h1"
            variant="h6"
            noWrap
            className={classes.title}
          >
            Employee<span className={classes.span}>Track</span>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={classes.icon} />
          </IconButton>
        </div>
        <div className={classes.side}>
        <SideNav />
        </div>
      </Drawer>
      <main className={classes.content}>
        <div>{switchRoute}</div>
      </main>
    </div>
  );
};

export default Dashboard

