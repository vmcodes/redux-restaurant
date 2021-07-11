import React from "react";
import { useDispatch } from "react-redux";
import { Grid, TextField, Button, Card, CardContent } from "@material-ui/core";
import { cancel } from "../store/order";
import { setModal } from "../store/modal";

const DeliveryForm: React.FC = () => {
  const dispatch = useDispatch();

  const submitOrder = async (e: any) => {
    e.preventDefault();

    const modal = {
      title: "Thank you!",
      message: "Your order is being prepared.",
      showModal: true,
    };

    dispatch(setModal(modal.title, modal.message, modal.showModal));
  };

  const cancelOrder = () => {
    dispatch(cancel());
  };

  return (
    <form onSubmit={submitOrder}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="fullName"
                name="fullName"
                label="Full name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="mobile"
                name="mobile"
                label="Mobile/Whatsapp"
                fullWidth
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="city" name="city" label="City" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="zip"
                name="zip"
                label="Zip"
                fullWidth
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="notes"
                name="notes"
                label="Notes"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                onClick={cancelOrder}
                variant="contained"
                color="secondary"
                fullWidth
              >
                Cancel
              </Button>
            </Grid>

            <br />
            <Grid item xs={12} sm={4} />
            <br />

            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Checkout
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default DeliveryForm;
