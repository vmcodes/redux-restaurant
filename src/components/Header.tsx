import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Link,
  Tooltip,
  Card,
  Typography,
} from "@material-ui/core";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import InfoIcon from "@material-ui/icons/Info";
import { Link as Scroll } from "react-scroll";
import { setModal } from "../store/modal";

interface Panel {
  children: React.ReactNode;
  value: number;
  index: number;
  onClick: any;
}

function TabPanel(props: Panel) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index ? (
        <Typography style={{ color: "#FFF" }}>{children}</Typography>
      ) : (
        <Typography style={{ color: "#E0E0E0" }}>{children}</Typography>
      )}
    </div>
  );
}

function a11yProps(index: number): Object {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    bottom: 0,
    left: 0,
    right: 0,
    top: "auto",
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "65%",
    },
  },
  tabs: {
    margin: "auto",
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}));

type StoreProps = {
  name: string;
};

const Header: React.FC<StoreProps> = ({ name }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleShare = async () => {
    navigator.clipboard.writeText(window.location.href);

    const modal = {
      title: "Thanks for sharing!",
      message: "Link was copied to clip board.",
      showModal: true,
    };

    dispatch(setModal(modal.title, modal.message, modal.showModal));
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hey, let's get food from the " + name + "!"
    );

    window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
  };

  return (
    <div className={classes.root}>
      <Card>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarTitle}>
            <Link variant="button" color="textPrimary" href="/">
              <b>Redux Restaurant</b>
            </Link>
          </div>
          <Tooltip title="WhatsApp!">
            <IconButton onClick={handleWhatsApp}>
              <WhatsAppIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Share">
            <IconButton onClick={handleShare}>
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>

        <AppBar position="fixed" className={classes.appBar}>
          <Tabs
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
            className={classes.tabs}
            value={value}
          >
            <Scroll
              to="about"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <TabPanel value={value} index={0} onClick={() => setValue(0)}>
                <Tab
                  label="About"
                  icon={<InfoIcon />}
                  aria-label="food"
                  {...a11yProps(0)}
                />
              </TabPanel>
            </Scroll>

            <Scroll
              to="food"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <TabPanel value={value} index={1} onClick={() => setValue(1)}>
                <Tab
                  label="Food"
                  icon={<RestaurantIcon />}
                  aria-label="food"
                  {...a11yProps(1)}
                />
              </TabPanel>
            </Scroll>

            <Scroll
              to="drinks"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <TabPanel value={value} index={2} onClick={() => setValue(2)}>
                <Tab
                  label="Drinks"
                  icon={<LocalDrinkIcon />}
                  aria-label="drinks"
                  {...a11yProps(2)}
                />
              </TabPanel>
            </Scroll>

            <Scroll
              to="order"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <TabPanel value={value} index={3} onClick={() => setValue(3)}>
                <Tab
                  label="Order"
                  icon={<ShoppingBasket />}
                  aria-label="order"
                  {...a11yProps(3)}
                />
              </TabPanel>
            </Scroll>
          </Tabs>
        </AppBar>
      </Card>
    </div>
  );
};

export default Header;
