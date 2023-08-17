import { Box } from '@mui/material'
function Container(props){
    let sxContainer = {        
        borderRadius: '16px',
    };
    return (<Box sx={sxContainer}>
        {props.children}
    </Box>);
}
export {Container}