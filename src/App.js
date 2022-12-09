//Libs
import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import * as animationData from './developer-animation.json';

//Custom components
import {
  AboutMe,
  Carrousel,
  CarrouselCard,
  HeroSection,
  Footer,
  SectionTitle,
} from './components';

//Styles
import './App.css';

//Project pictures
import blogPicture from './fotos/blog.png';
import institutoAdmin from './fotos/instituto-admin.jpg';
import instipoa from './fotos/instipoa.jpg';
import quiz from './fotos/quiz.jpg';

const openLink = (url) => window.open(url, '_blank');

function App() {
  //const theme = useSelector((state) => state.portfolio.theme);
  //const darkMode = theme === 'dark';
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='bg-gray-800 blink min-w-[412px] h-full'>
      <HeroSection />
      <AboutMe />
      {/*<Lottie options={defaultOptions} height={400} width={400} />*/}
      <SectionTitle title='Personal projects' className='text-yellow-500'/>
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
      <Footer />
    </div>
  );
}

export default App;
