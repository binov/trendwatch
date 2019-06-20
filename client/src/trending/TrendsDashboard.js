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
import {
  MuiThemeProvider,
  withStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { red, blue, grey } from "@material-ui/core/colors";
import "./Trending.css";
import TwitterIcon from "./twittericon";

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
    this.props.fetchNewsTrends();
  }

  render() {
    const cards = [1, 2, 3];
    const { classes } = this.props;
    //const classes = useStyles();
    const cardClasses = `trendcard ${classes.card}`;
    const unsubscribedCardClasses = `unsubscribedtrendcard trendcard ${
      classes.card
    }`;
    const bgColor = grey[800];
    console.log(
      "Sports Trends:" + JSON.stringify(this.props.sportsTrends, null, 4)
    );
    console.log(
      "News Trends:" + JSON.stringify(this.props.newsTrends, null, 4)
    );
    console.log(
      "Movie Trends:" + JSON.stringify(this.props.movieTrends, null, 4)
    );
    const redTheme = createMuiTheme({ palette: { primary: red } });
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
                      <Grid
                        container
                        alignItems="flex-start"
                        justify="flex-end"
                        direction="row"
                        style={{ paddingTop: 5, paddingRight: 5 }}
                      >
                        <TwitterIcon />
                        <span style={{ color: "#00acee" }}>
                          {trendItem.twitterCount}
                        </span>
                      </Grid>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {trendItem.eventName}
                        </Typography>
                        <Typography>
                          Now on:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {trendItem.channel}
                          </span>
                        </Typography>
                      </CardContent>
                      {!trendItem.isSubscribed && (
                        <CardActions>
                          <Button
                            color="primary"
                            variant="raised"
                            style={{
                              borderRadius: 35,
                              backgroundColor: "#f67a05",
                              padding: "5px 5px",
                              fontSize: "15px"
                            }}
                          >
                            SUBSCRIBE
                          </Button>
                        </CardActions>
                      )}
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <h1>News</h1>
            <Grid container spacing={4}>
              {this.props.newsTrends.length > 0 &&
                this.props.newsTrends.map(trendItem => (
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
                        <Typography>
                          Now on:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {trendItem.channel}
                          </span>
                        </Typography>
                      </CardContent>
                      {!trendItem.isSubscribed && (
                        <CardActions>
                          <Button
                            color="primary"
                            variant="raised"
                            style={{
                              borderRadius: 35,
                              backgroundColor: "#f67a05",
                              padding: "5px 5px",
                              fontSize: "15px"
                            }}
                          >
                            SUBSCRIBE
                          </Button>
                        </CardActions>
                      )}
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
                        <Typography>
                          Now on:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {trendItem.channel}
                          </span>
                        </Typography>
                      </CardContent>
                      {!trendItem.isSubscribed && (
                        <CardActions>
                          <Button
                            color="primary"
                            variant="raised"
                            style={{
                              borderRadius: 35,
                              backgroundColor: "#f67a05",
                              padding: "5px 5px",
                              fontSize: "15px"
                            }}
                          >
                            SUBSCRIBE
                          </Button>
                        </CardActions>
                      )}
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
function mapStateToProps({ sportsTrends, newsTrends, movieTrends }) {
  return { sportsTrends, newsTrends, movieTrends };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(TrendsDashboard));
