import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ImageLogo from './ImageLogo';

export default function PartnersSection({partnersList,sx}){
    let imageSx = {mt:{xs:3,sm:7},maxHeight:150,px:3};
    return (
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            {partnersList.map((p)=>{
                return (<ImageLogo imagePath={p.imagePath} sx={p.sx??imageSx}/>)
            })}
        </Box>
    );
}