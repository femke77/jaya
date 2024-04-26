import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
// import ProfileImage from '../../assets/images/profile_image.png'

const Item = styled('div')(({ theme }) => ({
  background: 'transparent',
  padding: theme.spacing(1),
  textAlign: 'left',
}));

// const styles = (theme) => ({
//     about: {
//       [theme.breakpoints.only("xs")]: {
//       flexDirection: 'column-reverse'
//     }
//   }
// })

function AboutMe() {
  return (
    <>
    <h3>Introduction</h3>
    <h2>About Me</h2>
    <p>With a background rich in communication and interpersonal skills, complemented by my energetic personality, I thrive in collaborative environments. As a highly detail-oriented individual, I ensure precision and accuracy in all my work, committed to delivering high-quality outcomes while adapting to new challenges. My multitasking capabilities and communication skills have proven vital in navigating the fast-paced demands of my current industry and I excel in resolving customer issues with empathy and professionalism.</p>
    <br/>
  </>)

} 

export default function About() {
  return (
      <Grid container={true} id="about" spacing={2} 
        sx={(theme) => ({
        [theme.breakpoints.only("xs")]: {
          flexDirection: 'column-reverse'
        }
      })}>
        <Grid item="true" xs={12} sm={7} md={8}> 
          <Item><AboutMe/></Item>
        </Grid>
        <Grid item="true" xs={12} sm={5} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Item>
            <img src='/src/assets/images/profile_image.png' alt="Profile Image" style={{ width: '240px' }} />
          </Item>
        </Grid>
      </Grid>
  );
}