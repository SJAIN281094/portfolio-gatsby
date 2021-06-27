import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import NavigationLinks from '../navigationLinks';
import logo from '../../../../public/static/images/logo.png';

const Container = ({ ...props }) => <Grid container {...props} />;
const Item = ({ ...props }) => <Grid item {...props} />;

const useStyles = makeStyles(styles);

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.headerWrapper}>
      <Toolbar>
        <Container className={classes.headerContainer}>
          <Item xs={2}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img src={logo} className={classes.logo} />
            </IconButton>
          </Item>
          <Item xs={10}>
            <NavigationLinks links={props.links} />
          </Item>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  links: PropTypes.array,
};

Header.defaultProps = {
  links: [],
};

export default Header;
