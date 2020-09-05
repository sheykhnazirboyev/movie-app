import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        marginTop:"3em"
    },
    slideItem:{
        padding:"10px",
        outline:"none",
        "&:onFocus":{
            borderColor:"red"
        }
    },
    header:{
        textAlign: "center",
        color:"rgba(0, 0, 0, 0.6)",
        margin:"10px"
    },
    divider:{
        margin:"10px"
    }
}));

export default useStyles;