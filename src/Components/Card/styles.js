import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width:"90%"
    },
    title:{
        color:"blue",
    },
    media: {
        height: "200px",
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    overview: {
        maxWidth: "100ch",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"

    },
    genres:{
        color:"#aaa",
        margin:"3px"
    }
}));

export default useStyles