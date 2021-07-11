import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";
import StickyHeadTable from "./Table";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import DeliveryForm from "./DeliveryForm";
import { restaurant as store, menu } from "../data";

const useStyles = makeStyles((theme) => ({
  position: {
    margin: theme.spacing(3, 0),
  },
  large: { height: "100%", width: "auto", borderRadius: 5 },
}));

const Store: React.FC = () => {
  const classes: any = useStyles();
  const [featuredDish, setFeaturedDish] = useState<Array<any>>([]);
  const [featuredDrink, setFeaturedDrink] = useState<Array<any>>([]);

  useEffect(() => {
    if (!featuredDish[0] || !featuredDrink[0]) {
      let food: any[] = [];
      let drink: any[] = [];

      menu.forEach((item) => {
        if (item.itemType === "Food") {
          food.push(item);
        } else if (item.itemType === "Drink") {
          drink.push(item);
        }
      });

      setFeaturedDish(food);
      setFeaturedDrink(drink);
    }
  }, [featuredDish, featuredDrink]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" id="about">
        <Header name={store.name} phone={store.phone} />
        <main className={classes.position}>
          {store?.name && (
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Grid container justify="space-around">
                    <Grid xs={12} sm={4}>
                      <Typography variant="h3">
                        Welcome to the {store.name}!
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        <i>{store.description}</i>
                        <br />
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        <b>Phone:</b> {store.phone}
                        <br />
                        <b>Address:</b>
                        <br />
                        {store.name}
                        <br />
                        {store.address} <br />
                        {store.city}, {store.state} {store.zip}
                        <br />
                        <b>Hours:</b> {store.timeOpen} - {store.timeClosed}
                        <br />
                      </Typography>
                    </Grid>

                    <Grid xs={12} sm={4}>
                      <Avatar
                        alt={store.name}
                        src={store.imgURL}
                        className={classes.large}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </div>
            </Card>
          )}
          <div className={classes.position} id="food">
            <Typography variant="h6" gutterBottom>
              Food
            </Typography>
            <hr />
            <br />
            <Grid container spacing={4}>
              {featuredDish.map((post) => (
                <FeaturedPost
                  key={post._id}
                  name={post.name}
                  cost={post.cost}
                  description={post.description}
                  imgURL={post.imgURL}
                />
              ))}
            </Grid>
          </div>

          <div className={classes.position} id="drinks">
            <Typography variant="h6" gutterBottom>
              Drinks
            </Typography>
            <hr />
            <br />
            <Grid container spacing={4}>
              {featuredDrink.map((post) => (
                <FeaturedPost
                  key={post._id}
                  name={post.name}
                  cost={post.cost}
                  description={post.description}
                  imgURL={post.imgURL}
                />
              ))}
            </Grid>
          </div>
        </main>

        <div className={classes.position} id="order">
          <Typography variant="h6" gutterBottom>
            Order
          </Typography>
          <hr />
          <br />

          <StickyHeadTable />
        </div>

        <div className={classes.position}>
          <Typography variant="h6" gutterBottom>
            Delivery Information
          </Typography>
          <hr />
          <br />

          <DeliveryForm />
        </div>

        <Footer
          title="Redux Restaurant"
          description="A small TypeScript project."
        />
      </Container>
    </>
  );
};

export default Store;
