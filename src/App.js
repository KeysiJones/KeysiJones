//Libs
import React from 'react';
import { Router, Link } from '@reach/router';

//Custom components
import {
  HeroSection,
  Carrousel,
  CarrouselCard,
  SectionTitle,
  SectionDescription,
} from './components';

//Styles
import './App.css';

//Project pictures
import blogPicture from './fotos/blog.png';
import institutoAdmin from './fotos/instituto-admin.jpg';
import instipoa from './fotos/instipoa.jpg';
import quiz from './fotos/quiz.jpg';

const openLink = (url) => window.open(url, '_blank');

const Menu = () => (
  <div className='flex bg-gray-800 opacity-70 py-4 justify-around'>
    <span className='text-yellow-400 text-left text-3xl font-bold opacity-100 hover:text-white'>
      <Link to='/'>Keysi Jones</Link>
    </span>
    <span className='text-white text-left text-3xl font-semibold opacity-100 hover:text-yellow-400'>
      <Link to='/about'>About me</Link>
    </span>
    <span className='text-white text-left text-3xl font-semibold opacity-100 hover:text-yellow-400'>
      <Link to='/projects'>Projects</Link>
    </span>
  </div>
);

const Projects = () => (
  <section
    className='masthead flex flex-col h-full'
    role='img'
    aria-label='Image Description'
  >
    <Menu />
    <div className='flex flex-col h-full justify-center'>
      <SectionTitle title='Personal projects' />
      <Carrousel>
        <CarrouselCard
          link='https://keysijones-blog.vercel.app/'
          openLink={openLink}
          cardImage={blogPicture}
          description='My personal blog to write about tech, check it out.'
        />
        <CarrouselCard
          link='https://keysi-quiz.vercel.app/'
          openLink={openLink}
          cardImage={quiz}
          description='This is a quiz app i made with React.'
        />
        <CarrouselCard
          link='https://instituto-helper.netlify.app/'
          openLink={openLink}
          cardImage={instipoa}
          description='Instipoa is a web app made to make the access to our
            Institute classes easy.'
        />
        <CarrouselCard
          link='https://instituto-admin.vercel.app/'
          openLink={openLink}
          cardImage={institutoAdmin}
          description="Instituto admin was developed to administrate Instipoa's
            classes."
        />
      </Carrousel>
    </div>
  </section>
);

function App() {
  // const theme = useSelector((state) => state.portfolio.theme);
  // const darkMode = theme === "dark";

  return (
    <Router>
      <Home path='/' />
      <AboutMe path='/about' />
      <Projects path='/projects' />
    </Router>
  );
}

const AboutMe = () => (
  <section
    className='masthead flex flex-col h-full'
    role='img'
    aria-label='Image Description'
  >
    <Menu />
    <div className='flex'>
      <div className='flex flex-col m-auto mx-8 sm:mx-12 items-center gap-1 sm:my-12 lg:my-32'>
        <SectionTitle title='About me' />
        <SectionDescription
          description="I'm a trilingual Fullstack Javascript engineer specializing in React 
    and Node.JS with a passion for building easy-to-use innovative applications that 
    make people's lives easier."
        />
      </div>
      <div className='flex flex-col m-auto mx-8 sm:mx-12 items-center gap-1 sm:my-12 lg:my-32'>
        <SectionTitle title='Hobbies' />
        <SectionDescription
          description='In my free time i like to go out with my wife, listen 
    to personal development podcasts, go to the gym and create personal 
    projects to improve my coding skills.'
        />
      </div>
    </div>
  </section>
);

const Home = () => (
  <div style={{ minWidth: '412px' }} className='bg-gray-300 h-screen'>
    <div>
      <div className='blink'>
        <section
          className='masthead flex flex-col h-full'
          role='img'
          aria-label='Image Description'
        >
          <Menu />
          <HeroSection />
          {/* <Footer /> */}
          {/* <h2
              className={`font-normal mb-5 ${
                darkMode ? "text-white" : "text-gray-700"
              } text-center text-2xl lg:text-4xl mx-2 mt-2`}
            >
            Hey, I'm Jones.
            </h2>
            <h1 className="text-8xl mx-60 text-white">
              I love creating software and learning tech-related stuff
            </h1> */}
          {/* <div className="flex flex-col xl:flex-row">

      </div> */}
        </section>
      </div>
    </div>
  </div>
);

export default App;
