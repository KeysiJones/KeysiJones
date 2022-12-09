function HeroSection() {
  //const GRAVATAR_HASH = process.env.REACT_APP_GRAVATAR_HASH;
  //const avatarImagePath = `https://www.gravatar.com/avatar/${GRAVATAR_HASH}?s=280`;
  const openLink = (url) => window.open(url, '_blank');

  return (
    <div
      className='flex h-screen px-4 py-4 lg:items-center lg:px-40 lg:flex lg:flex-row'
      id='hero-section'
    >
      <div
        id='myinfo'
        className='flex flex-col self-center w-full font-semibold text-center rounded-3xl'
      >
{/*         <img
          src={avatarImagePath}
          className='w-40 m-auto rounded-full sm:w-48 md:w-60'
          alt="Keysi Jones's avatar"
        /> */}
        <p className='relative mt-8 mb-8 text-6xl text-center text-white sm:mb-0 lg:text-7xl lg:px-12 bottom-12'>
          I make the <span className='text-yellow-400'>web</span> a better <br/>place
          for <span className='text-yellow-400'>you</span>
        </p>
        <p className='mx-2 mt-2 mb-12 text-4xl font-light text-center text-white sm:mb-0'>
          by building <span className='text-yellow-400'>beautiful </span> and{' '}
          <span className='text-yellow-400'>reliable</span> applications
        </p>
        <button
          className='max-w-sm p-4 m-auto text-2xl bg-yellow-400 sm:mt-14 hero rounded-xl'
          onClick={() => openLink('https://linkedin.com/in/keysijones')}
        >
          GET IN TOUCH NOW
        </button>
      </div>
    </div>
  );
}

export { HeroSection };
