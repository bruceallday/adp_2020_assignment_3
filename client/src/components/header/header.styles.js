import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
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
        flexDirection: 'row' 
    },

    toolBar: { 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
}))