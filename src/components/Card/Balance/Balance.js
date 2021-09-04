import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { GiTwoCoins } from "react-icons/gi";
import "./Balance.scss";

const useStyles = makeStyles({
  root: {
    width: 350,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
  },
});

export default function Balance() {
  const classes = useStyles();

  return (
    <div className="card">
      <Card className={classes.root}>
        <CardContent>
          <h5 className="card__header">TOTAL VALUE</h5>
          <h3 className="card__balance">€1,909.46</h3>
          <div className="card__group">
            <div className="card__group-prebalance">
              <GiTwoCoins className="card__group-prebalance_icon" />
              <span className="card__group-prebalance_amount">€1,000.56</span>
            </div>
            <div className="card__group-prebalance">
              <MusicNoteIcon className="card__group-prebalance_icon" />
              <span className="card__group-prebalance_amount">€908.90</span>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </CardActions>
      </Card>
    </div>
  );
}
