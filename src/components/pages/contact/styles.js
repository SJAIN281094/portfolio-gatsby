import homeBackground from '../../../images/background.png';

const styles = (theme) => {
  return {
    contactContainer: {
      backgroundImage: `url(${homeBackground})`,
      padding: '0 50px 50px',
      fontFamily: 'poppins',
      fontWeight: 400,
      fontSize: '2rem',
    },
    heading: {
      display: 'flex',
      color: theme.palette.primary.contrastText,
      margin: '10px 0',
      position: 'relative',
      '&:before': {
        width: '100%',
        height: '2px',
        content: '""',
        display: 'block',
        backgroundColor: 'white',
        bottom: '-22px',
        position: 'relative',
        right: '10px',
      },
      '&:after': {
        width: '100%',
        height: '2px',
        content: '""',
        display: 'block',
        backgroundColor: 'white',
        bottom: '-22px',
        position: 'relative',
        left: '10px',
      },
    },
    socialCardWrapper: {
      justifyContent: 'flex-start',
    },
    copyWright: {
      color: theme.palette.primary.contrastText,
    },
  };
};

export default styles;
