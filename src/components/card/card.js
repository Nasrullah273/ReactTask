import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import style from './card.module.css'

const useStyles = makeStyles({
  root: {
    width: '330px',
    height: 200,
    marginLeft: "10px"
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
      <>
      <div style={{color: "#707071", fontWeight: "700"}}>
          <p>Student Dashboard</p>
      </div>
      <div className={style.cardRoot}>
          <div className={style.cardHeader}>
              <div>
    <Card className={classes.root}>
      <CardActionArea>
      <div style={{ margin: "10px" }}>
                <Avatar className={classes.greenColor}><CalendarTodayIcon className={style.cardIcon} /></Avatar>
              </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            80%
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Attendance percentage
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <p></p>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className={classes.root}>
      <CardActionArea>
      <div style={{ margin: "10px" }}>
                <Avatar className={classes.greenColor}><LibraryBooksIcon className={style.cardIcon1} /></Avatar>
              </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            60%
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Number of courses
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <p></p>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <div style={{ margin: "10px" }}>
                <Avatar className={classes.greenColor}><CalendarTodayIcon className={style.cardIcon2} /></Avatar>
              </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             60%
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Attendance Marks Percentage
          </Typography>
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
