import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import LogoANMusic from "../../assets/img/logo.svg";
import "./Navbar.scss";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#09060A",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="navbar">
      <div className="navbar__primary">
        <Fab color="primary" aria-label="add">
          <img src={LogoANMusic} alt="logo" />
          Markets
        </Fab>
      </div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Portfolio"
          value="portfolio"
          icon={<DonutLargeIcon />}
        />
        <BottomNavigationAction
          label="Music"
          value="music"
          icon={<MusicNoteIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
