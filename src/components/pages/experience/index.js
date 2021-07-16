import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import backgroundImg from '../../../images/experience.png';
import Pluang from '../../../images/pluang.png';
import Legalraasta from '../../../images/legalraasta.png';
import DROR from '../../../images/dror.png';

import styles from './styles';

const Container = ({ ...props }) => <Grid container {...props} />;
const Item = ({ ...props }) => <Grid item {...props} />;

const useStyles = makeStyles(styles);

function Experience(props) {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Paper className={classes.paper} elevation={1}>
        <figure
          style={{ backgroundImage: `url(${backgroundImg})` }}
          alt="Experience"
          className={classes.backgroundImg}
        />
        <Container direction="column" className={classes.section}>
          <Item className={classes.heading}>Experience</Item>
          <Item>
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeRange}>
                    2021 - Present
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timelineDot}>
                    <img src={Pluang} className={classes.companyIcon} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.card}>
                    <Typography className={classes.companyName} variant="h5">
                      Pluang Technologies India Pvt. Ltd.
                    </Typography>
                    <Typography
                      className={classes.workingExperience}
                      component="p"
                    ></Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeRange}>
                    2019 - 2021
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timelineDot}>
                    <img src={DROR} className={classes.companyIcon} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.card}>
                    <Typography className={classes.companyName} variant="h5">
                      DROR Labs Pvt. Ltd.
                    </Typography>
                    <Typography
                      className={classes.workingExperience}
                      component="p"
                    ></Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeRange}>
                    2018 - 2019
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timelineDot}>
                    <img src={Legalraasta} className={classes.companyIcon} />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.card}>
                    <Typography className={classes.companyName} variant="h5">
                      Legalraasta Technologies Pvt. Ltd.
                    </Typography>
                    <Typography
                      className={classes.workingExperience}
                      component="p"
                    ></Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Item>
        </Container>
      </Paper>
    </Container>
  );
}

export default Experience;
