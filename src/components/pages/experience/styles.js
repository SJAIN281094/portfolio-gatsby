const styles = (theme) => {
  return {
    mainContainer: {
      padding: '50px',
      fontFamily: 'poppins',
      fontWeight: 400,
      fontSize: '2rem',
    },
    backgroundImg: {
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      width: '100%',
      height: '100%',
      filter: 'brightness(0.7)',
      backgroundSize: 'inherit',
      zIndex: -99,
      margin: 0,
    },
    paper: {
      position: 'relative',
      backgroundColor: '#1f1010d9',
      display: 'flex',
      width: '100%',
    },
    section: {
      padding: '10px 30px',
      width: '100%',
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
    card: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.common.white}`,
      padding: '10px',
    },
    timeRange: {
      color: theme.palette.primary.contrastText,
      fontWeight: 500,
    },
    timelineDot: {
      borderColor: 'inherit',
      backgroundColor: 'inherit',
    },
    companyIcon: {
      width: '40px',
      borderRadius: '40px',
    },
    companyName: {
      color: theme.palette.common.white,
      fontWeight: 500,
    },
    workingExperience: {
      color: theme.palette.common.white,
    },
  };
};

export default styles;
