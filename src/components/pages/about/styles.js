import homeBackground from '../../../images/home_background.png';

const styles = (theme) => {
  return {
    aboutContainer: {
      backgroundImage: `url(${homeBackground})`,
      height: '100vh',
      padding: '0 50px',
      fontFamily: 'poppins',
      fontWeight: 400,
      fontSize: '2rem',
    },
    aboutPaper: {
      width: '100%',
      backgroundColor: '#1f1010ad',
      display: 'flex',
      padding: '10px 0',
    },
    aboutSectionLeft: {
      padding: '10px 30px',
    },
    heading: {
      display: 'flex',
      color: theme.palette.primary.contrastText,
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
    illustrationWrapper: {
      display: 'flex',
      height: 'calc(100vh - 100px)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    illustration: {
      width: '300px',
    },
    aboutTextWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontSize: '1rem',
      flexWrap: 'wrap',
    },
    question: {
      fontWeight: 500,
      color: theme.palette.primary.contrastText,
      '&:after': {
        width: '100%',
        height: '1px',
        content: '""',
        display: 'block',
        backgroundColor: 'white',
        bottom: '-1px',
        position: 'relative',
      },
    },
    aboutText: {
      color: theme.palette.common.white,
    },
  };
};

export default styles;
