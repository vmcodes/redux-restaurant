import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(10, 0),
  },
}));

interface FooterProps {
  description: string;
  title: string;
}

const Footer: React.FC<FooterProps> = ({ description, title }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
