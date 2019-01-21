import { container, title } from "assets/jss/material-kit-react.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

const mainPageStyle = {
  carouselStyle,
  container,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    "@media (max-width: 768px)": {
      margin: "30px 0px 0px"
    },
    "@media (min-width: 768px)": {
      margin: "30px 20px 20px"
    },
    // margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  name: {
    marginTop: "3em",
    "& h3": {
      marginTop: "0px",
      fontWeight: "100"
    }
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  category: {
    textTransform: "uppercase",
    marginTop: "3em",
    marginBottom: "0.2em",
    fontSize: "1.6em",
    fontWeight: "500"
  },
  button: {
    marginLeft: "20px",
    fontSize: "1.0em",
    paddingLeft: "4px",
    paddingRight: "4px"
  }
};

export default mainPageStyle;
