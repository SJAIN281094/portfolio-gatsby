import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import styles from './styles';

const Container = ({ ...props }) => <Grid container {...props} />;
const Item = ({ ...props }) => <Grid item {...props} />;

const useStyles = makeStyles(styles);

function Home(props) {
  const classes = useStyles();

  return (
    <Container className={classes.homeContainer}>
      <Item xs={6} className={classes.homeSetionFirst}>
        <p className={classes.intro}>Hello, I'm</p>
        <p className={classes.name}>Shubham Jain</p>
        <p className={classes.profession}>FullStack Developer</p>
      </Item>
    </Container>
  );
}

export default Home;
