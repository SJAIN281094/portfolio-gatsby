import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Container = ({ ...props }) => <Grid container {...props} />;
const Item = ({ ...props }) => <Grid item {...props} />;

function SocialMedia(props) {
  const classes = useStyles();

  return (
    <Container className={classes.card}>
      <Item xs={10}>
        <Container direction="column" alignItems="flex-start">
          <Typography className={classes.title}>{props.title}</Typography>
          <Typography className={classes.subTitle}>{props.subTitle}</Typography>
        </Container>
      </Item>
      <Item>
        <img src={props.icon} />
      </Item>
    </Container>
  );
}

SocialMedia.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

SocialMedia.defaultProps = {
  title: 'Title',
  subTitle: 'Subtitle',
  url: '/',
  icon: '#',
};

export default SocialMedia;
