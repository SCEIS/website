import ImageLogo from '../Components/ImageLogo';
import PartnersSection from '../Components/PartnersSection';
import Section from '../Components/Section'
import { Box, Typography } from '@mui/material'

function WhoWeAreSection(){
    return (<Section>
        <Typography variant='h4'>¿Quienes somos?</Typography>
        <Typography>Somos un grupo de estudiantes de la carrera de Ing. de sistema cuyo objetivo es realizar, publicar y diseminar investigaciones científicas de alto impacto en ciencias de la computación. La SCEIS investiga modelos, técnicas, herramientas para mejorar la calidad de los productos y procesos de desarrollo de software.</Typography>
    </Section>);
}

function BenefitsSection(){
    return (<Section>
        <Typography variant='h4'>Beneficios de los miembros</Typography>
        <Typography>Reconocimiento de las horas realizadas, se ayudará en la materia de metodología de la investigación, se ayudará con el tema de tesis.  Apoyo de la SCEIS en su investigación.</Typography>
    </Section>);
}

function ResposabilitiesSection(){
    return (<Section>
        <Typography variant='h4'>Responsabilidades de los miembros</Typography>
        <Typography>Apoyar en todos los eventos de la sociedad, ya sea en el área de logística, asistencia y requerimientos de los organizadores.</Typography>
    </Section>);
}

function MainPage(){
    let sectionOneSx = {
        background:'linear-gradient(180deg, #3177EE 0%, #2059BA 50.87%, #113D8A 100%);',
        width:1,
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
            'imagePath':require('../static/images/SEISLAB.webp'),
            'redirectUrl':'http://www.seislab.cl/'
        },
        {
            'imagePath':require('../static/images/RModInria.png'),
            'redirectUrl':'https://isclab.dcc.uchile.cl/'
        },
        {
            'imagePath':require('../static/images/ISCLab.png'),
            'redirectUrl':'https://rmod.gitlabpages.inria.fr/website/'
        }
    ]
    return (<Box sx={{flexDirection:'column',display:'flex',alignItems:'center'}}>
    <Section sx={sectionOneSx}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            {sceisLogo}
            <Box sx={{display:'flex',justifyContent:'center'}}>
                {catolicaLogo}
                {ciceiLogo}
            </Box>
        </Box>
    </Section>
    <WhoWeAreSection/>
    <BenefitsSection/>
    <ResposabilitiesSection/>
    <PartnersSection partnersList={partnersList}></PartnersSection>
    </Box>);
}
export {MainPage}