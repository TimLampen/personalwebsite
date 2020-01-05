import React from 'react';
import CardBody from "./CardBody";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    background: {
        backgroundColor: "#393939",
        paddingBottom: "30rem"
    }
});

export default function App() {
    const classes = useStyles();
    return (
      <div className={classes.background}>
          <header>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          </header>
          <CardBody/>
    </div>
  );
}

function cardBody() {
    return (
        <div>

        </div>
    );
}
