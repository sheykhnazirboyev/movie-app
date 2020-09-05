import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        display:"flex",
        justifyContent:"center"
    },
    pagination:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"Center",
        listStyle:"none",
        paddingLeft:"0px",
        cursor:"pinter",
        
    },
    item:{
        border:"1px solid #aaa",
        width:"35px",
        height:"35px",
        display:"flex",
        justifyContent:"center",
        alignItems:"Center",
        borderRadius:"50%",
        margin:"2px",
        cursor:"pinter"
    },
    active:{
        backgroundColor:"#1976d2",
        color:"#fff",
        cursor:"pinter"
    },
    disabled:{
        color: "#aaa",
        borderColor:"#aaa",
        cursor:"pinter"
    }
}));

export default useStyles;