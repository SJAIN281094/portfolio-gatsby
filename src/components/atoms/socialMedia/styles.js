const styles = (theme) => ({
  card: {
    border: `1px solid ${theme.palette.primary.contrastText}`,
    fontWeight: 300,
    fontFamily: 'poppins',
    borderRadius: 8,
    padding: '10px',
  },
  title: {
    color: theme.palette.common.white,
  },
  subTitle: {
    color: theme.palette.primary.contrastText,
  },
});

export default styles;
