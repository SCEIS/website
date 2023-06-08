import Section from '../Components/Section'
function MainPage(){
    let sectionOneSx = {
        background:'linear-gradient(180deg, #3177EE 0%, #2059BA 50.87%, #113D8A 100%);',
        minHeight:{xs:300,sm:450,md:500},
        border:0,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        color:'#ffffff'
    }
    return (<Section sx={sectionOneSx}>LOL</Section>);
}
export {MainPage}