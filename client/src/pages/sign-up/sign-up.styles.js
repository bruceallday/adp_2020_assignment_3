import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {
    width: 450,
    alignSelf: 'center',
  },

  formField: {
    margin: 10,
  },

  paper: {
    width: 500,
    padding: 30,
  },

  formContainer: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));

export default useStyles;
