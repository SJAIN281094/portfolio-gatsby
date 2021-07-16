import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import aboutImg from '../../../images/about.png';
import styles from './styles';

const Container = ({ ...props }) => <Grid container {...props} />;
const Item = ({ ...props }) => <Grid item {...props} />;

const useStyles = makeStyles(styles);

function About(props) {
  const classes = useStyles();

  return (
    <Container className={classes.aboutContainer}>
      <Paper className={classes.aboutPaper} elevation={1}>
        <Container direction="column" className={classes.aboutSectionLeft}>
          <Item className={classes.heading}>About</Item>
          <Item>
            <Container>
              <Item xs={6} className={classes.illustrationWrapper}>
                <img src={aboutImg} className={classes.illustration} />
              </Item>
              <Item xs={6} className={classes.aboutTextWrapper}>
                <Container direction="column">
                  <p>
                    <span className={classes.question}>WHO AM I?</span>
                  </p>
                  <p className={classes.aboutText}>
                    Hi! I'm Shubham Jain born and raised in the city of Taj,
                    Agra, India.
                  </p>
                  <p className={classes.aboutText}>
                    I have done my early schooling as well as my intermediate
                    from Simpkins School and Agra Public School respectively and
                    completed my engineering from Guru Gobind Singh Indraprastha
                    University, New Delhi in Electrical and Electronics.
                  </p>
                  <p className={classes.aboutText}>
                    I would love to introduce myself as a fullstack web
                    developer with over 3.5+ years of experience in developing
                    advanced websites and standard-based web applications. I
                    have experience and expertise in designing scalable systems
                    from frontend to backend and have implemented them largely
                    for small to medium-sized startups. In addition I have
                    successfully completed many projects which involve mobile
                    development and infrastructure setup as well.
                  </p>
                </Container>
              </Item>
            </Container>
          </Item>
        </Container>
      </Paper>
    </Container>
  );
}

export default About;
