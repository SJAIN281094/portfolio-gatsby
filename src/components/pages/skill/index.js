import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import NodeImg from '../../../images/skills/node.png';
import JsImg from '../../../images/skills/html-css-js.png';
import ReactImg from '../../../images/skills/react.png';
import AwsImg from '../../../images/skills/aws.png';
import DockerImg from '../../../images/skills/docker.png';
import GitImg from '../../../images/skills/git.png';
import TypescriptImg from '../../../images/skills/ts.png';
import SocketImg from '../../../images/skills/socket.png';
import ExpressImg from '../../../images/skills/express.png';
import SailsImg from '../../../images/skills/sails.png';
import K8Img from '../../../images/skills/k8.png';
import JenkinsImg from '../../../images/skills/jenkins.png';
import MongoImg from '../../../images/skills/mongodb.png';
import MysqlImg from '../../../images/skills/mysql.png';
import PostgresImg from '../../../images/skills/postgresql.png';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const Container = ({ ...props }) => <Grid container {...props} />;
const Item = ({ ...props }) => <Grid item {...props} />;

const useStyles = makeStyles(styles);

const itemData = [
  {
    img: JsImg,
    title: 'Js',
    cols: 3,
  },
  {
    img: NodeImg,
    title: 'Nodejs',
    cols: 2,
  },

  {
    img: AwsImg,
    title: 'AWS',
    cols: 3,
  },

  {
    img: TypescriptImg,
    title: 'Typescript',
    cols: 2,
  },
  {
    img: DockerImg,
    title: 'Docker',
    cols: 2,
  },
  {
    img: ReactImg,
    title: 'Reactjs',
    cols: 3,
  },
  {
    img: ExpressImg,
    title: 'Express',
    cols: 2,
  },
  {
    img: MysqlImg,
    title: 'Mysql',
    cols: 3,
  },
  {
    img: MongoImg,
    title: 'Mongo',
    cols: 3,
  },
  {
    img: SocketImg,
    title: 'Socket',
    cols: 2,
  },
  {
    img: GitImg,
    title: 'Git',
    cols: 2,
  },
  {
    img: JenkinsImg,
    title: 'Jenkins',
    cols: 3,
  },
  {
    img: PostgresImg,
    title: 'Postgres',
    cols: 2,
  },
  {
    img: K8Img,
    title: 'K8',
    cols: 2,
  },
];

function Skill(props) {
  const classes = useStyles();

  return (
    <Container className={classes.aboutContainer}>
      <Paper className={classes.aboutPaper} elevation={1}>
        <Container direction="column" className={classes.aboutSectionLeft}>
          <Item className={classes.heading}>Skills</Item>
          <Item>
            <Container>
              <Item xs={8} className={classes.illustrationWrapper}>
                <ImageList rowHeight={120} cols={11}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className={classes.illustration}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Item>
              <Item xs={4} className={classes.aboutTextWrapper}>
                <Container direction="column">
                  <Typography component="p">
                    <Typography className={classes.question} component="span">
                      Technologies Worked On:
                    </Typography>
                  </Typography>
                  <Typography className={classes.skills} component="p">
                    <ul>
                      <li>Javascript</li>
                      <li>NodeJs</li>
                      <li>ReactJs</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>AWS Services</li>
                      <li>MongoDB</li>
                      <li>PostgresSql</li>
                      <li>Mysql</li>
                      <li>Docker</li>
                      <li>ExpressJs</li>
                      <li>Typescript</li>
                      <li>Jenkins</li>
                      <li>Kubernetes</li>
                      <li>Git</li>
                      <li>SocketIO</li>
                    </ul>
                  </Typography>
                </Container>
              </Item>
            </Container>
          </Item>
        </Container>
      </Paper>
    </Container>
  );
}

export default Skill;
