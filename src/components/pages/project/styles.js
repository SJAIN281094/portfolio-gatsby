const styles = (theme) => {
  return {
    mainContainer: {
      padding: '50px',
      fontFamily: 'poppins',
      fontWeight: 400,
      fontSize: '2rem',
    },
    paper: {
      position: 'relative',
      backgroundColor: '#1f1010d9',
      display: 'flex',
      width: '100%',
      padding: '0 0 15px 0',
    },
    section: {
      padding: '10px 10px',
      overflow: 'scroll',
    },
    heading: {
      display: 'flex',
      color: theme.palette.primary.contrastText,
      position: 'relative',
      marginBottom: '20px',
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
    sliders: {
      height: 'calc(100vh - 100px)',
      overflowY: 'scroll',
      display: 'flex',
      width: '100%',
      position: 'relative',
    },
    sliderImg: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  };
};

export default styles;
