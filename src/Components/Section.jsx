import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Section({children,sx}){
    let defaultSectionSx = {
        width: 0.75
    };
    let sectionSx = defaultSectionSx;
    for(const sxProp in sx){
        sectionSx[sxProp] =  sx[sxProp];
    }
    return (<Box sx={sectionSx}>{children}</Box>);
}