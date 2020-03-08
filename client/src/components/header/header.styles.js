import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {
    flexGrow: 1,
  },

  link: {
    textDecoration: 'none',
    color: 'white',
    padding: 15,
  },

  linkDiv: {
    display: 'flex',
    flexDirection: 'row',
  },

  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
