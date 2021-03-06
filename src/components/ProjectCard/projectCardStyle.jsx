import { container, title } from "assets/jss/material-kit-react.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";
import typoStyles from "assets/jss/material-kit-react/components/typographyStyle.jsx";
import tooltipsStyle from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const projectCardStyle = {
  ...imagesStyles,
  ...typoStyles,
  ...tooltipsStyle,
  title: {
    fontWeight: "500",
    marginBottom: "0.5rem",
    marginTop: "0rem"
  },
  subtitle: {
    fontWeight: "500",
    color: "#666",
    marginTop: "0px",
    marginBottom: "0px",
    lineHeight: "1.2em",
    "@media (max-width: 768px)": {
      fontSize: "1.0rem"
    },
    "@media (min-width: 768px)": {
      fontSize: "1.2rem"
    }
  },
  tags: {
    "@media (max-width: 768px)": {
      fontSize: "1.0rem"
    },
    "@media (min-width: 768px)": {
      fontSize: "1.2rem"
    },
    marginRight: "0.5rem"
  },
  ptitle: {
    fontWeight: "600",
    fontSize: "1rem",
    color: "info",
    marginTop: "2em",
    marginBottom: "0.5em"
  },
  chip: {
    margin: "2px",
    backgroundColor: "#eee"
  }
};

export default projectCardStyle;
