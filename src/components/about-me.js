import { useSelector } from 'react-redux';
import { SectionDescription, SectionTitle } from './';
// import { ThemeSwitcher } from './theme-switcher';

function AboutMe() {
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === 'dark';
  // const isLargeScreen = window.innerWidth >= 1024;
  // const isMobile = window.innerWidth <= 375;

  return (
    <div className='flex flex-col xl:flex-row'>
      <div className='flex flex-col items-center m-auto mx-8 sm:mx-12'>
        <SectionTitle darkMode={darkMode} title='About me' />
        <SectionDescription
          darkMode={darkMode}
          description="I'm Keysi Jones, a trilingual Fullstack Javascript engineer specializing in React 
            and Node.JS. I am passionate for building beautiful and useful applications that 
            make people's lives easier."
        />
      </div>
      <div className='flex flex-col items-center gap-1 m-auto mx-8 sm:mx-12 sm:my-12 lg:my-32'>
        <SectionTitle darkMode={darkMode} title='Hobbies' />
        <SectionDescription
          darkMode={darkMode}
          description='In my free time I like to go out with my wife, listen 
            to personal development podcasts, go to the gym and create personal 
            projects to improve my coding skills.'
        />
      </div>
    </div>
  );
}

export { AboutMe };
