import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import SchoolIcon from '@material-ui/icons/School';
import Collapse from "@material-ui/core/Collapse";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import style from "./drawer.module.css";
import Card from "./../card/card"
import ClassCard from "./../nextClassCard/classCard"
import ScheduleCard from "./../schedule/schedule"
import Badge from '@material-ui/core/Badge';
import EmailIcon from '@material-ui/icons/Email';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ClassIcon from '@material-ui/icons/Class';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssessmentIcon from '@material-ui/icons/Assessment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import ErrorIcon from '@material-ui/icons/Error';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  root2: {
    width: "100%",
    maxWidth: 360,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
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
    marginRight: 36,
    backgroundColor: "#192D3E",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  green: {
    backgroundColor: "green",
    height: "20px",
    width: "20px",
    fontSize: "10px",
    // padding: "15px"
    marginTop: "5px",
  },
  greenColor: {
    backgroundColor: "#DB1974 ",
    height: "20px",
    width: "20px",
    fontSize: "10px",
    // padding: "15px"
    // marginTop: "5px"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sectionDesktop: {
    float: 'right',
    marginLeft: '85%',
    color: 'black',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

const  MiniDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen2(!open2);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <h1>React Task</h1>
      <CssBaseline />
      <AppBar
      position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <InboxIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <EmailIcon />
              
            </IconButton>
          </div>
        </Toolbar>
        
      </AppBar>
      <Drawer
        variant="permanent"
        // style={{backgroundColor: "black"}}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        <div style={{marginRight: "80px", color: "white", fontWeight: "900"}}>
            <p>React Task</p>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon style={{color: "white"}} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={style.listMenuTextAll}>
          <MenuList>
          <MenuItem className={style.listMenuText}>
          <Avatar alt="Remy Sharp" src="./public/notification.svg" />
              <div style={{ marginLeft: "50px" }}>
              <ListItem button>
            <ListItemText className={style.listMenuText} primary="Jhon Doe" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
              </div>
            </MenuItem>
             <br></br><br></br>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon>
                <DashboardIcon className={style.listMenuIcon} />
              </ListItemIcon>
              Dashboard
              <div style={{ marginLeft: "50px" }}>
                <Avatar className={classes.greenColor}>3</Avatar>
              </div>
            </MenuItem>
            <MenuItem className={style.listMenuText}> 
              <ListItemIcon>
                <PersonOutlineIcon className={style.listMenuIcon} />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon>
                <ChatBubbleOutlineIcon className={style.listMenuIcon} />
              </ListItemIcon>
              Chat
            </MenuItem>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon>
                <CalendarTodayIcon className={style.listMenuIcon}/>
              </ListItemIcon>
              Calender
            </MenuItem>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon >
                <AssignmentIcon className={style.listMenuIcon} />
              </ListItemIcon>
              Notice Board
              <div style={{ marginLeft: "40px" }}>
                <Avatar className={classes.green}>3</Avatar>
              </div>
            </MenuItem>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon>
                <ClassIcon className={style.listMenuIcon}/>
              </ListItemIcon>
              Class Routine
            </MenuItem>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon>
                <ClassIcon className={style.listMenuIcon}/>
              </ListItemIcon>
              Live Class
            </MenuItem>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon>
                <AssignmentTurnedInIcon className={style.listMenuIcon} />
              </ListItemIcon>
              Attendance
            </MenuItem>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon >
                <AssessmentIcon className={style.listMenuIcon} />
              </ListItemIcon>
              Assessments
            </MenuItem>
            <MenuItem className={style.listMenuText}>
              <ListItemIcon >
                <AssignmentIcon className={style.listMenuIcon}/>
              </ListItemIcon>
              Assignment
              <div style={{ marginLeft: "50px" }}>
                <Avatar className={classes.greenColor}>3</Avatar>
              </div>
            </MenuItem>
            <ListItem button onClick={handleClick}>
            <ListItemIcon className={style.listMenuIcon}>
              <AssignmentLateIcon className={style.listMenuIcon} />
            </ListItemIcon>
            <ListItemText className={style.listMenuText} primary="Results" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <SchoolIcon className={style.listMenuIcon}/>
                </ListItemIcon>
                <ListItemText primary="1st Semester" />
              </ListItem>
              <ListItem button className={classes.nested}>
              <ListItemIcon >
                  <SchoolIcon className={style.listMenuIcon} />
                </ListItemIcon>
                <ListItemText primary="2nd Semester" />
              </ListItem>
              <ListItem button className={classes.nested}>
              <ListItemIcon>
                  <SchoolIcon className={style.listMenuIcon} />
                </ListItemIcon>
                <ListItemText primary="3rd Semester" />
              </ListItem>
              <ListItem button className={classes.nested}>
              <ListItemIcon >
                  <SchoolIcon className={style.listMenuIcon}/>
                </ListItemIcon>
                <ListItemText primary="4th Semester" />
              </ListItem>
              <ListItem button className={classes.nested}>
              <ListItemIcon >
                  <SchoolIcon className={style.listMenuIcon}/>
                </ListItemIcon>
                <ListItemText primary="5th Semester" />
              </ListItem>
            </List>
          </Collapse>
            <MenuItem>
              <ListItemIcon>
                <GolfCourseIcon className={style.listMenuIcon} />
              </ListItemIcon>
              Course
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SchoolIcon className={style.listMenuIcon}/>
              </ListItemIcon>
              Lectures
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ErrorIcon className={style.listMenuIcon}/>
              </ListItemIcon>
              Fee Collection
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <InboxIcon className={style.listMenuIcon}/>
              </ListItemIcon>
              Scholarship
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <LiveHelpIcon className={style.listMenuIcon}/>
              </ListItemIcon>
              FAQ
            </MenuItem>
          </MenuList>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
        <Card />
        </div>
        
        <div>
          <ClassCard />
        </div>
        <div>
          <ScheduleCard />
        </div>
      </main>
    </div>
  );
}

export default MiniDrawer
