import palette from "../palette";
// eslint-disable-next-line
export default {
  root: {
    "&$selected": {
      backgroundColor: palette.background.default,
    },
    "&$hover": {
      "&:hover": {
        backgroundColor: palette.background.default,
      },
    },
  },
};
