import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {
    width: 350,
    alignSelf: 'center',
  },

  formField: {
    margin: 10,
  },

  paper: {
    width: 400,
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