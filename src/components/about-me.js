// import { useSelector } from 'react-redux';
// import { ContactCard, SectionDescription, SectionTitle } from './';
// import { ThemeSwitcher } from './theme-switcher';

function HeroSection() {
  // const theme = useSelector((state) => state.portfolio.theme);
  // const darkMode = theme === 'dark';
  // const GRAVATAR_HASH = process.env.REACT_APP_GRAVATAR_HASH;
  // const avatarImagePath = `https://www.gravatar.com/avatar/${GRAVATAR_HASH}?s=280`;
  // const isLargeScreen = window.innerWidth >= 1024;
  // const isMobile = window.innerWidth <= 375;

  return (
    <div
      className='flex flex-col lg:flex-row h-full place-content-center'
      id='aboutme'
    >
      <div className='self-end mb-4 mr-8' id='switch-small'>
        {/* <ThemeSwitcher /> */}
      </div>
      <div className={`lg:flex py-4`}>
        <div className='flex flex-col'>
          <div id='myinfo' className='rounded-3xl text-center'>
            <div>
              <h1 className='font-semibold text-center text-3xl md:text-4xl  mx-auto px-56'>
                <p className='text-7xl sm:text-8xl text-center mb-4 text-white'>
                  I am making the web a better place for{' '}
                  <span className='text-yellow-400'>you</span>
                </p>
                <p className='font-light text-white text-center text-2xl lg:text-4xl mx-2 mt-2'>
                  by building <span className='text-yellow-400'>fullstack</span>{' '}
                  apps
                </p>
              </h1>
              <button className='hero p-4 rounded-xl bg-yellow-400 text-2xl mt-10 text-center'>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroSection };
