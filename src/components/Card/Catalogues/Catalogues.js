import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import { Button } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import "./Catalogues.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const tileData = [
  {
    title: "Sasha Lindon",
    revenue: "3.26%",
  },
  {
    title: "Roberto Sanchez",
    revenue: "6.56%",
  },
  {
    title: "Danilo Paredes",
    revenue: "5.66%",
  },
  {
    title: "Mariana Cone",
    revenue: "4.87%",
  },
  {
    title: "Martin Pugliese",
    revenue: "6.56%",
  },
  {
    title: "Ricky Maravilla",
    revenue: "1.72%",
  },
  {
    title: "Jonh Smith",
    revenue: "7.16%",
  },
  {
    img: "../../../img/8.jpg",
    title: "Gervasio Puente",
    revenue: "3.59%",
  },
  {
    title: "María Giro",
    revenue: "3.85%",
  },
  {
    title: "Pepe Perez",
    revenue: "2.76%",
  },
];

export default function SelectedListItem() {
  const classes = useStyles();

  return (
    <div className="list">
      <Card className="catalogues">
        <div className={classes.root}>
          <h4 className="catalogues__title">Most Popular catalogues</h4>
          <span className="catalogues__title-header_left">TITLE</span>
          <span className="catalogues__title-header_right">REVENUE</span>
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            {tileData.map((tile, idx) => (
              <ListItem key={idx}>
                <Avatar
                  src={`https://source.unsplash.com/collection/${idx}`}
                  alt={tile.title}
                />

                <ListItemText primary={tile.title} className="catalogue" />
                <ListItemText primary={tile.revenue} className="revenue" />
                <Button variant="contained" color="primary">
                  TRADE
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
      </Card>
    </div>
  );
}
