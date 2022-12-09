//Libs
import React from 'react';
import * as animationData from './developer-animation.json';

import {
  AboutMe,
  Carrousel,
  CarrouselCard,
  HeroSection,
  Footer,
  SectionTitle,
} from './components';

import './App.css';

import blogPicture from './fotos/blog.png';
import quiz from './fotos/quiz.jpg';

const openLink = (url) => window.open(url, '_blank');

function App() {
  return (
    <div className='bg-gray-800 blink min-w-[412px] h-full'>
      <HeroSection />
      <AboutMe />
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
      </Carrousel>
      <Footer />
    </div>
  );
}

export default App;
