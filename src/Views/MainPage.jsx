import ImageLogo from '../Components/ImageLogo';
import PartnersSection from '../Components/PartnersSection';
import Section from '../Components/Section'
import { Box } from '@mui/material'
function MainPage(){
    let sectionOneSx = {
        background:'linear-gradient(180deg, #3177EE 0%, #2059BA 50.87%, #113D8A 100%);',
        minHeight:{xs:400,sm:450,md:500},
        border:0,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        color:'#ffffff'
    }
    let sceisLogoSx = {width:{xs:0.7,sm:0.7,md:0.9},mt:{xs:3,sm:3},maxWidth:500};
    let sceisLogoPath = require('../static/images/SCEISLong.png');
    let sceisLogo = (<ImageLogo imagePath={sceisLogoPath} sx={sceisLogoSx}/>)

    let catolicaLogoSx = {width:{xs:0.7,sm:0.7,md:0.9},mt:{xs:3,sm:7},maxWidth:200};
    let catolicaLogoPath = require('../static/images/CatolicaLong.png');
    let catolicaLogo = (<ImageLogo imagePath={catolicaLogoPath} sx={catolicaLogoSx}/>)

    let ciceiLogoPath = require('../static/images/CICEI.png');
    let ciceiLogoSx = {width:{xs:0.7,sm:0.7,md:0.9},mt:{xs:3,sm:7},maxWidth:200};
    let ciceiLogo = (<ImageLogo imagePath={ciceiLogoPath} sx={ciceiLogoSx}/>)

    let partnersList = [
        {
            'imagePath':require('../static/images/SEISLAB.webp')
        },
        {
            'imagePath':require('../static/images/RModInria.png')
        },
        {
            'imagePath':require('../static/images/ISCLab.png')
        }
    ]
    return (<>
    <Section sx={sectionOneSx}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            {sceisLogo}
            <Box sx={{display:'flex',justifyContent:'center'}}>
                {catolicaLogo}
                {ciceiLogo}
            </Box>
        </Box>
    </Section>
    <PartnersSection partnersList={partnersList}></PartnersSection>
    </>);
}
export {MainPage}