// import {
//   faLinkedin,
//   faTwitter,
//   faGithub,
//   faTelegram,
// } from '@fortawesome/free-brands-svg-icons';

// import { ContactCard } from './';

function HeroSection() {
  const GRAVATAR_HASH = process.env.REACT_APP_GRAVATAR_HASH;
  const avatarImagePath = `https://www.gravatar.com/avatar/${GRAVATAR_HASH}?s=280`;
  // const icons = {
  //   linkedin: faLinkedin,
  //   github: faGithub,
  //   twitter: faTwitter,
  //   telegram: faTelegram,
  // };

  return (
    <div
      className='flex h-[96vh] py-4 lg:items-center lg:px-40 lg:flex lg:flex-row'
      id='hero-section'
    >
      <div
        id='myinfo'
        className='flex flex-col font-semibold text-center rounded-3xl'
      >
        <img
          src={avatarImagePath}
          className='w-48 m-auto rounded-full sm:w-48 md:w-60'
          alt="Keysi Jones's avatar"
        />
        <p className='mt-8 mb-12 text-center text-white text-7xl md:text-8xl lg:text-9xl'>
          I make the <span className='text-yellow-400'>web</span> a better place
          for <span className='text-yellow-400'>you</span>
        </p>
        <p className='mx-2 mt-2 text-2xl font-light text-center text-white lg:text-4xl'>
          by building <span className='text-yellow-400'>beautiful </span> and{' '}
          <span className='text-yellow-400'>reliable</span> applications
        </p>
        <button className='p-4 m-auto text-2xl bg-yellow-400 mt-14 hero rounded-xl'>
          Get in touch now
        </button>
        {/* <ContactCard icons={icons} footer={true} socialMediaIconsSize='lg' /> */}
      </div>
    </div>
  );
}

export { HeroSection };
