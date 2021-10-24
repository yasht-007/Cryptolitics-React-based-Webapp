import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BackgroundImage from "../../images/banner.jpg";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: `url(${BackgroundImage})`,
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner} id="markets">
      <Container className={classes.bannerContent}>
        <div className={classes.tagLine}>
          <Typography
            variant="h2"
            style={{
              fontweight: "bold",
              marginBottom: 15,
              fontFamily: "monospace",
            }}
          >
            Trending Coins
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "monospace",
            }}
            Get
            all
            the
            Info
            regarding
            your
            favorite
            Crypto
          ></Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
