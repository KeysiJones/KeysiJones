function SectionDescription({ description }) {
  return (
    <p
      style={{ lineHeight: 'inherit' }}
      className='text-3xl font-light text-center text-white lg:text-4xl 2xl:text-5xl sm:mx-16 lg:mx-16'
    >
      {description}
    </p>
  );
}

export { SectionDescription };
