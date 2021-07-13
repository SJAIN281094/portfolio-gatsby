import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Link from '../../atoms/link';
import styles from './styles';

const useStyles = makeStyles(styles);

function NavigationLinks(props) {
  const classes = useStyles();

  return (
    <ul className={classes.navlinkWrapper}>
      {props.links.map((link) => {
        return (
          <li className={classes.navlink}>
            <Link title={link.title} href={link.href} />
          </li>
        );
      })}
    </ul>
  );
}

NavigationLinks.propTypes = {
  links: PropTypes.array.isRequired,
};

export default NavigationLinks;
