import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ImageLogo({imagePath, sx, alt = 'img'}){
    return (<Box component="img" sx={sx} alt={alt} src={imagePath} />);
}