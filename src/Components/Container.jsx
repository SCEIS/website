import { Box } from '@mui/material'
function Container(props){
    let sxContainer = {        
        borderRadius: '16px',
        ...props.sx
    };
    return (<Box sx={sxContainer}>
        {props.children}
    </Box>);
}
export {Container}