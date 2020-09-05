import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        
    },  
    item:{
        border:"1px solid red"
    },
    genres:{
        color:"#aaa",
        marginRight:"5px"
    },
    title:{
        color:"rgba(0, 0, 0, 0.6)"
    },
    tagline:{
        fontSize:"14px",
        margin:"10px 0px",
        color:"rgba(0, 0, 0, 0.6)"
    },
    star:{
        color: "gold"
    },
    votes:{
        display:"flex",
        alignItems:"center"
    },
    voteCount:{
        color:"#aaa",
        marginLeft:"10px"
    },
    listItem:{
        listStyle:"none"
    },
    release_date:{
        textAlign:"right"
    },
    divider:{
        margin:"10px 0px"
    },
    overview:{
        color:"rgba(0, 0,0,0.75)",
        margin:"10px 0px"
    },
    companies:{
        fontSize:"15px",
        color:"rgba(0, 0, 0, 0.6)",
        "& ul":{
            listStyle:"none",
            margin:"0px",
            paddingLeft:"0px"
        }
    },
    contries:{
        fontSize:"15px",
        color:"rgba(0, 0, 0, 0.6)",
        "& ul":{
            listStyle:"none",
            margin:"0px",
            paddingLeft:"0px"
        }
    }
}));

export default useStyles;