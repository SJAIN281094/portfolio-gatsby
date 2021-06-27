import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

function Link(props) {
  const classes = useStyles();

  return (
    <a href={props.href} target={props.target} className={classes.link}>
      {props.title}
    </a>
  );
}

Link.propTypes = {
  target: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Link.defaultProps = {
  title: 'Title',
  href: '/',
  target: '#',
};

export default Link;
