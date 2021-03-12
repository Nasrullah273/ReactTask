import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CardActionArea from "@material-ui/core/CardActionArea";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import style from "./classCard.module.css";
import Calendar from "react-calendar";
import TimerIcon from '@material-ui/icons/Timer';
import ClearIcon from '@material-ui/icons/Clear';
import RemoveIcon from '@material-ui/icons/Remove';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '320px',
    height: '200px',
    marginTop: "20px",
  },
  root1: {
    width: "680px",
    height: "410px",
    marginTop: "20px",
  },
  rootAtt: {
    width: "485px",
    height: "410px",
    marginTop: "20px",
  },
  rootCal: {
    width: "485px",
    height: "410px",
    marginTop: "20px",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const [value, onChange] = useState(new Date());
  const classes = useStyles();

  return (
    <>
      <div className={style.cardRoot}>
        <div className={style.cardHeader}>
          <div className={style.cardBase}>
            <Card className={classes.root}>
              <CardActionArea>
                <div style={{ margin: "10px" }}>
                  <Avatar className={classes.greenColor}>
                    <TimerIcon className={style.cardIcon} />
                  </Avatar>
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Next Class...
                  </Typography>
                  <p style={{color: "#A1A1A1"}}>Lorem Ipsum Dolor Sit Amet</p>
                  <div className={style.rectangle}>
                      <p style={{padding: "5px"}}>12:24:00</p>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
              </CardActions>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <div style={{ margin: "10px" }}>
                  <Avatar className={classes.greenColor}>
                    <CalendarTodayIcon style={{color: "black"}} />
                  </Avatar>
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Up Comming Events
                  </Typography>
                  <p style={{color: "#A1A1A1"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text ever since the 1500.</p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <p></p>
              </CardActions>
            </Card>
          </div>
          <div className={style.cardBase1}>
            <Card className={classes.root1}>
              <CardActionArea>
                <div style={{ margin: "10px", display: "flex" }}>
                  <p>Lorem ipsum</p>
                  <RemoveIcon style={{color: "", marginTop: "5px", marginLeft: "480px"}} />
                  <AutorenewIcon style={{color: "", marginTop: "5px", marginLeft: "10px"}} />
                  <ClearIcon style={{color: "", marginTop: "5px", marginLeft: "10px"}} />
                </div>
                <CardContent>
                 
                </CardContent>
              </CardActionArea>
              <CardActions>
                <p></p>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <div className={style.cardRoot}>
        <div className={style.cardHeader}>
          <div className={style.cardBaseAttendance}>
            <Card className={classes.rootAtt}>
              <CardActionArea>
                <div style={{ margin: "10px", display: "flex" }}>
                  <p>Attendance</p>
                  <RemoveIcon style={{color: "", marginTop: "5px", marginLeft: "300px"}} />
                  <AutorenewIcon style={{color: "", marginTop: "5px", marginLeft: "10px"}} />
                  <ClearIcon style={{color: "", marginTop: "5px", marginLeft: "10px"}} />
                </div>
                <Divider />
                <CardContent>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <p></p>
              </CardActions>
            </Card>
          </div>
          <div className={style.cardBaseCalender}>
            <Card className={classes.rootCal}>
              <CardActionArea>
                <div style={{ margin: "10px", display: "flex" }}>
                  <p>Event Calendar</p>
                  <RemoveIcon style={{color: "", marginTop: "5px", marginLeft: "280px"}} />
                  <AutorenewIcon style={{color: "", marginTop: "5px", marginLeft: "10px"}} />
                  <ClearIcon style={{color: "", marginTop: "5px", marginLeft: "10px"}} />
                </div>
                <Divider />
                <CardContent>
                   <div style={{marginTop: "80px"}}>
                    <Calendar style={{ height: "600px" }} onChange={onChange} value={value} />
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <p></p>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
