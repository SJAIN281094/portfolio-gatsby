import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import SocialMedia from '../../../components/atoms/socialMedia';
import Linkedin from '../../../images/socialMedia/linkedin.svg';
import Github from '../../../images/socialMedia/github.svg';
import Email from '../../../images/socialMedia/email.svg';
import Stackoverflow from '../../../images/socialMedia/stackoverflow.svg';

import styles from './styles';

const Container = ({ ...props }) => <Grid container {...props} />;
const Item = ({ ...props }) => <Grid item {...props} />;

const useStyles = makeStyles(styles);

const socialMediaCards = [
  {
    title: 'Linkedin',
    subTitle: 'Profession social profile',
    url: 'www.linkedin.com/in/shubham-jain-700a15b5',
    icon: Linkedin,
  },
  {
    title: 'Github',
    subTitle: 'Version Control platform',
    url: 'https://github.com/SJAIN281094',
    icon: Github,
  },
  {
    title: 'Stack Overflow',
    subTitle: 'Developer community',
    url: 'https://stackoverflow.com/users/9403162/shubham-jain',
    icon: Stackoverflow,
  },
  {
    title: 'Email',
    subTitle: 'er.sjain28@gmail.com',
    url: 'www.linkedin.com/in/shubham-jain-700a15b5',
    icon: Email,
  },
];

function Contact(props) {
  const classes = useStyles();

  return (
    <Container className={classes.contactContainer}>
      <Container direction="column">
        <Item className={classes.heading}>Let's&nbsp;Be&nbsp;Friends</Item>
        <Item>
          <Container spacing={3} className={classes.socialCardWrapper}>
            {socialMediaCards.map((socialMedia) => {
              return (
                <Item xs={3}>
                  <SocialMedia
                    title={socialMedia.title}
                    subTitle={socialMedia.subTitle}
                    url={socialMedia.url}
                    icon={socialMedia.icon}
                  />
                </Item>
              );
            })}
          </Container>
        </Item>
        <Item>
          <Typography className={classes.copyWright}>
            ©All right reserved by Shubham Jain | Fullstack developer
          </Typography>
        </Item>
      </Container>
    </Container>
  );
}

export default Contact;
