import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Input,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { add, remove } from "../store/order";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: { width: "100%", maxWidth: 160 },
  buttonGroup: {
    float: "right",
    marginLeft: "auto",
  },
  cost: {
    float: "left",
    marginRight: "auto",
  },
  input: {
    width: 20,
  },
}));

interface PostProps {
  name: string;
  cost: number;
  description: string;
  imgURL: string;
}

const FeaturedPost: React.FC<PostProps> = ({
  name,
  cost,
  description,
  imgURL,
}) => {
  const { order } = useSelector((state: any) => state.order);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    order.forEach((item: any) => {
      if (item.name === name && item.quantity >= 0) {
        setQuantity(item.quantity);
      } else if (item.name !== name && !item.quantity) {
        setQuantity(0);
      }
    });
  }, [quantity, order]);

  const addDish = (name: string, cost: number) => {
    let total = quantity + 1;
    setQuantity(total);

    let values = {
      name: name,
      quantity: total,
      cost: cost,
    };

    dispatch(add(values));
  };

  const removeDish = (name: string, cost: number) => {
    if (quantity > 0) {
      let total = quantity - 1;
      setQuantity(total);

      let values = {
        name: name,
        quantity: total,
        cost: cost,
      };

      dispatch(remove(values));
    }
  };

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea disableRipple={true}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <Grid item xs={12} md={12}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {name}
                </Typography>
                <Typography color="textSecondary">
                  $ {cost.toFixed(2)}
                </Typography>
                <Typography paragraph>{description}</Typography>
                <Typography color="primary">
                  <div className={classes.buttonGroup}>
                    <IconButton onClick={() => removeDish(name, cost)}>
                      <RemoveCircleIcon />
                    </IconButton>
                    <Input
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      name={name}
                      className={classes.input}
                    />
                    <IconButton onClick={() => addDish(name, cost)}>
                      <AddCircleIcon />
                    </IconButton>
                  </div>
                </Typography>
              </CardContent>
            </Grid>
          </div>

          <CardMedia className={classes.cardMedia} image={imgURL} />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedPost;
