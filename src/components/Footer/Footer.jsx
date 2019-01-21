/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>
          &copy; 2019, simple portfolio made by{" "}
          <a href="https://github.com/jjunghub/portfolio" target="_blank">
            jjung
          </a>{" "}
          <br /> using awesome front-end source{" "}
          <a href="https://material-ui.com/" target="_blank">
            Material UI
          </a>
          ,{" "}
          <a
            href="https://demos.creative-tim.com/material-kit-react/#/documentation/tutorial"
            target="_blank"
          >
            Material Kit React{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
