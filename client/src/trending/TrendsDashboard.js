import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/GroupWork";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "./Trending.css";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Phoenix
      </Link>
      {" team."}
    </Typography>
  );
}

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 0)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2)
  }
});

class TrendsDashboard extends Component {
  componentDidMount() {
    this.props.fetchSportsTrends();
    this.props.fetchMovieTrends();
    this.props.fetchEventTrends();
  }

  render() {
    const cards = [1, 2, 3];
    const { classes } = this.props;
    //const classes = useStyles();
    const cardClasses = `trendcard ${classes.card}`;
    console.log(
      "Sports Trends:" + JSON.stringify(this.props.sportsTrends, null, 4)
    );
    console.log(
      "Event Trends:" + JSON.stringify(this.props.eventTrends, null, 4)
    );
    console.log(
      "Movie Trends:" + JSON.stringify(this.props.movieTrends, null, 4)
    );
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Team Phoenix
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                TrendWatch
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Never miss the live trend!!!
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <h1>Sports</h1>
            <Grid container spacing={4}>
              {this.props.sportsTrends.length > 0 &&
                this.props.sportsTrends.map(trendItem => (
                  <Grid item key={trendItem._id} xs={12} sm={6} md={4}>
                    <Card className={cardClasses}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={trendItem.imageUrl}
                        title={trendItem.eventName}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {trendItem.eventName}
                        </Typography>
                        <Typography>Now on: {trendItem.channel}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <h1>Events</h1>
            <Grid container spacing={4}>
              {this.props.eventTrends.length > 0 &&
                this.props.eventTrends.map(trendItem => (
                  <Grid item key={trendItem._id} xs={12} sm={6} md={4}>
                    <Card className={cardClasses}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={trendItem.imageUrl}
                        title={trendItem.eventName}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {trendItem.eventName}
                        </Typography>
                        <Typography>Now on: {trendItem.channel}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <h1>Movies</h1>
            <Grid container spacing={4}>
              {this.props.movieTrends.length > 0 &&
                this.props.movieTrends.map(trendItem => (
                  <Grid item key={trendItem._id} xs={12} sm={6} md={4}>
                    <Card className={cardClasses}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={trendItem.imageUrl}
                        title={trendItem.eventName}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {trendItem.eventName}
                        </Typography>
                        <Typography>Now on: {trendItem.channel}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Team Phoenix
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            <MadeWithLove />
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}
function mapStateToProps({ sportsTrends, eventTrends, movieTrends }) {
  return { sportsTrends, eventTrends, movieTrends };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(TrendsDashboard));
