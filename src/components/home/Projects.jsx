import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import ProjectCard from '../home/ProjectCard.jsx';
import { Grow } from '@mui/material';
import portfolio from '../../assets/images/portfolio.png'
import elevate from '../../assets/images/elevate.png'
import weatherDashboard from '../../assets/images/weather-dashboard.png'
import socialNetwork from '../../assets/images/social-network-api.png'
import ecommerce from '../../assets/images/e-commerce-backend.png'
import employeeTracker from '../../assets/images/employee-tracker.png'

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

function ProjectText() {
  return (
    <>
      <h3>Portfolio</h3>
      <h2>Projects</h2>
      <p>Throughout the duration of this course I've built an array of applications, both solo and within a team. We were challenged with building primarily front-end, back-end and start-to-finish full-stack projects. </p>
    </>
  );
}

const projectData = [
  {
    img: portfolio, 
    title: 'Portfolio', 
    subtitle: 'Personal web dev folder built with React', 
    github: 'https://github.com/jayabaldwin/jaya-react-portfolio', 
    website: 'www.jayabaldwin.com',
    chips: ['React.js', 'Node.js', 'Material UI']
  },
  {
    img: elevate, 
    title: 'Elevate', 
    subtitle: 'Enhanced company management software', 
    github: 'https://github.com/jayabaldwin/elevate', 
    website: 'https://elevate-task-manager-4dc7b75f392c.herokuapp.com/',
    chips: ['Node.js', 'MySQL', 'Sequelize', 'Express.js', 'Bootstrap' ]
  },
  {
    img: weatherDashboard, 
    title: 'Weather Dashboard', 
    subtitle: 'A 5-Day Weather Forecast utilising Open Weather Maps Api', 
    github: 'https://github.com/jayabaldwin/weather-dashboard', 
    website: 'https://jayabaldwin.github.io/weather-dashboard/',
    chips: ['Javascript', 'HTML', 'CSS']
  },
  {
    img: socialNetwork, 
    title: 'Social Network API', 
    subtitle: 'Simplistic social network API utilising MongoDB', 
    github: 'https://github.com/jayabaldwin/social-network-api',
    chips: ['Node.js', 'MongoDB', 'Mongoose', 'Express.js'] 
  },
  {
    img: ecommerce, 
    title: 'E-Commerce Backend Database', 
    subtitle: 'A backend e-commerce application that utilises Express.js API and Sequelize to interact with a MySQL database', 
    github: 'https://github.com/jayabaldwin/e-commerce-backend', 
    chips: ['Node.js', 'MySQL', 'Sequelize', 'Express.js']
  },
  {
    img: employeeTracker, 
    title: 'SQL: Employee Tracker', 
    subtitle: "Content management systems (CMS), CLI application, to manage a company's employee database, using Node.js, Inquirer, and MySQL.", 
    github: 'https://github.com/jayabaldwin/employee-tracker', 
    chips: ['Node.js', 'MySQL', 'Inquirer']
  },
  // {
  //   img: 'svg-logo', 
  //   title: 'SVG Logo Generator', 
  //   subtitle: 'Node.js command-line application to generate an svg logo', 
  //   github: 'https://github.com/jayabaldwin/svg-logo-maker',
  //   chips: ['Node.js', 'Inquirer', 'Jest'] 
  // },
  // {
  //   img: '', 
  //   title: 'Final course project', 
  //   subtitle: 'Coming soon ...', 
  //   github: 'https://github.com/jayabaldwin', 
  //   website: 'https://github.com/jayabaldwin',
  //   chips: ['Node.js', 'React.js', 'MongoDB', 'Mongoose', 'Express.js', 'Material UI']
  // },
];

export default function Projects() {
  return (
    <Grid container id="projects" spacing={4} justifyContent="center" sx={{ flexWrap: 'wrap' }}>
      <Grid item xs={12}>
        <Item><ProjectText/></Item>
      </Grid>
      {projectData.map((project, index) => (
        <Grow key={index} in={true} timeout={1500 * index}>
          <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={4}>
              <ProjectCard {...project}/>
          </Grid>
          </Grow> 
      ))}
    </Grid>
  );
}