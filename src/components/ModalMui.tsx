import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Backdrop, Fade, makeStyles } from "@material-ui/core";
import { setModal } from "../store/modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalMui: React.FC = () => {
  const { modal } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();
  const classes = useStyles();

  const close = () => {
    dispatch(setModal("", "", false));
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={modal.showModal}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modal.showModal}>
        <div className={classes.paper}>
          <h1 id="transition-modal-title">{modal.title}</h1>
          <br />
          <h3 id="transition-modal-description">{modal.message}</h3>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalMui;
