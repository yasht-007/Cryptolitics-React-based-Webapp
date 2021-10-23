import { makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import CoinTable from "./CoinTable";

const Stats = () => {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#000",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.App} id="crypto">
        <Banner />
        <CoinTable />
      </div>
    </>
  );
};

export default Stats;
