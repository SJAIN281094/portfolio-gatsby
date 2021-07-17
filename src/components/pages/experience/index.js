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
import classNames from 'classnames';
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
                      className={classes.companyCagetory}
                      variant="body2"
                    >
                      Fintech company based in Indonesia
                    </Typography>
                    <Typography
                      className={classes.workingExperience}
                      component="p"
                    >
                      <ul>
                        <li>
                          Worked on Admin Panel for helping operation and
                          customer services.
                        </li>
                        <li>
                          Implement the role based access control (RBAC) on the
                          admin panel.
                        </li>
                        <li>
                          Automate the cashout flow for the users that increases
                          the cashout by 15% and reduces the operation workload
                          by 20%.
                        </li>
                        <li>
                          Automate the KYC registration process by using OCR
                          which reduces the operation workload by 30%.
                        </li>
                      </ul>
                    </Typography>
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
                  <Paper
                    elevation={3}
                    className={classNames(classes.card, classes.textAlignLeft)}
                  >
                    <Typography className={classes.companyName} variant="h5">
                      DROR Labs Pvt. Ltd.
                    </Typography>
                    <Typography
                      className={classes.companyCagetory}
                      variant="body2"
                    >
                      A personal safety app with emergency services.
                    </Typography>
                    <Typography
                      className={classes.workingExperience}
                      component="p"
                    >
                      <ul>
                        <li>
                          Worked on 24*7 Guard Safety feature with command
                          center.
                        </li>
                        <li>Worked on covid safety enterprise solution.</li>
                        <li>
                          Created Social Distancing feature for the enterprise
                          at the time of reopening of the offices after covid19.
                        </li>
                        <li>
                          Created an incident posting platform for the users to
                          create a safe society and to create awareness.
                        </li>
                        <li>
                          Over 50M users downloaded the App from Playstore and
                          Appstore.
                        </li>
                      </ul>
                    </Typography>
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
                      className={classes.companyCagetory}
                      variant="body2"
                    >
                      Fintech Company
                    </Typography>
                    <Typography
                      className={classes.workingExperience}
                      component="p"
                    >
                      <ul>
                        <li>
                          Worked on a GST platform created using handsontable.
                        </li>
                        <li>
                          In the platform we consolidate the user data and file
                          the GST from our portal to the government site by
                          using BOT.
                        </li>
                        <li>
                          Company revenue increased by 10% with automatic
                          filling.
                        </li>
                        <li>
                          Created a Mutual Fund platform from scratch and
                          integrated the BSE API.
                        </li>
                      </ul>
                    </Typography>
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
