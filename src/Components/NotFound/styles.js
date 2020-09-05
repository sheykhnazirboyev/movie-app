import {makeStyles}  from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100vh",
        backgroundColor:"pink"
    },
    content:{
        textAlign:"center",
        color:"#111",
        height:"300px",
    },
    legend:{
        fontWeight:"300",
        fontSize: theme.spacing(15)
    },
    subtitle:{
        color:"#aaa",
        marginBottom:"1em"
    },
    little:{
        fontSize:"13px",
        color:"#aaa",
        marginBottom:"1em"
    },
    link:{
        textDecoration:"none",
        color:"inherit",
    },
    btn:{
        marginTop:"1em",
    }
}));

export default useStyles;