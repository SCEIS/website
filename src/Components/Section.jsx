import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Section({children,sx}){
    return (<Box sx={sx}>{children}</Box>);
}