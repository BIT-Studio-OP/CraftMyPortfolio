import { createUseStyles } from 'react-jss';
import "../../fonts.css";
import Fade from 'react-reveal/Fade';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontFamily: 'sans-serif',
  },
  header: {
    textAlign: 'center',
    '& h1': {
      fontSize: '4rem',
      fontWeight: 'bold',
      fontFamily: 'Delicious Handrawn, cursive',
      marginBottom: '1rem',
    },
    '& p': {
      fontSize: '1.5rem',
      fontFamily: 'Raleway, sans-serif',
      marginTop: '2rem',
    },
    '& button': {
      marginTop: '2rem',
      padding: '1rem 2rem',
      backgroundColor: '#0077cc',
      fontFamily: 'Raleway, sans-serif',
      fontWeight: '300',
      color: '#fff',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: '#005fa3',
      },
    },
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '2rem',
    '& div': {
      width: '100%',
      maxWidth: '30rem',
      padding: '2rem',
      '& img': {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        marginBottom: '1rem',
        borderRadius: '0.5rem',
      },
      '& h2': {
        fontSize: '2rem',
        fontWeight: '500',
        fontFamily: 'Raleway, sans-serif',
        color: '#0077cc',
        marginBottom: '1rem',
      },
      '& p': {
        fontSize: '1.25rem',
        fontFamily: 'Raleway, sans-serif',
        lineHeight: '1.5',
      },
    },
  },
  testimonial: {
    padding: '2rem',
    backgroundColor: '#0077cc',
    color: '#fff',
    '& h2': {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    '& p': {
      fontSize: '1.5rem',
      marginBottom: '2rem',
    },
    '& span': {
      fontWeight: 'bold',
    },
  },
});

const HomeContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>CraftMyPortfolio</h1>
        <p>Craft the perfect portfolio to showcase your development projects and skills.</p>
        <button>Get started</button>
      </header>

      <section className={classes.section}>
        <Fade bottom>
        <div>
          <img src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Random" />
          <h2>Modern Design</h2>
          <p>Choose from a wide array of cutting-edge templates that will make your portfolio stand out.</p>
        </div>
        </Fade>
        <Fade bottom>
        <div>
          <img src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Random" />
          <h2>Easy to Customize</h2>
          <p>With our intuitive interface, you can personalize your portfolio to match your style.</p>
        </div>
        </Fade>
        <Fade bottom>
        <div>
          <img src="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Random" />
          <h2>Share Everywhere</h2>
          <p>CraftMyPortfolio allows you to easily share your portfolio on your preferred social media platforms or personal website.</p>
        </div>
        </Fade>
      </section>

    </div>
  );
};

export default HomeContent;