import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { getImage } from 'gatsby-plugin-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles';
import { CallMissedSharp } from '@material-ui/icons';

const Container = ({ ...props }) => <Grid container {...props} />;
const Item = ({ ...props }) => <Grid item {...props} />;

const useStyles = makeStyles(styles);

function Project(props) {
  const classes = useStyles();
  const data = useStaticQuery(
    graphql`
      query {
        backgrounds: allFile(
          filter: { sourceInstanceName: { eq: "projects-backgrounds" } }
        ) {
          nodes {
            childImageSharp {
              gatsbyImageData(formats: [JPG, PNG])
            }
          }
        }
      }
    `
  );

  const image1 = getImage(data.backgrounds.nodes[0]).images.fallback.src;
  const image2 = getImage(data.backgrounds.nodes[1]).images.fallback.src;

  return (
    <Container className={classes.mainContainer}>
      <Paper className={classes.paper} elevation={1}>
        <Container direction="column" className={classes.section}>
          <Item className={classes.heading}>Projects</Item>
          <Item className={classes.sliders}>
            <div className={classes.sliderImg}>
              <img src={image2} />
            </div>
            <div className={classes.sliderImg}>
              <img src={image1} />
            </div>
          </Item>
        </Container>
      </Paper>
    </Container>
  );
}

export default Project;
