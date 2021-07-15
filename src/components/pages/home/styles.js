import homeBackground from '../../../images/home_background.png';

const styles = (theme) => {
  return {
    homeContainer: {
      backgroundImage: `url(${homeBackground})`,
      height: '100vh',
      paddingTop: '65px',
      backgroundSize: 'contain',
    },
    homeSetionFirst: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '50px',
    },
    intro: {
      fontWeight: 500,
      fontSize: '2.7rem',
      color: theme.palette.primary.contrastText,
      margin: 0,
      marginLeft: '50px',
      lineHeight: '5rem',
    },
    name: {
      fontSize: '4.5rem',
      color: theme.palette.common.white,
      fontWeight: 500,
      margin: 0,
      marginLeft: '50px',
      lineHeight: '4.5rem',
    },
    profession: {
      fontWeight: 500,
      fontSize: '2rem',
      color: theme.palette.common.white,
      margin: 0,
      marginLeft: '50px',
      lineHeight: '3rem',
    },
  };
};

export default styles;
