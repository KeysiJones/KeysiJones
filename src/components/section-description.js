function SectionDescription({ description }) {
  return (
    <p
      style={{ lineHeight: 'inherit' }}
      className='text-3xl font-light text-center text-black-700 lg:text-3xl sm:mx-16 lg:mx-16'
    >
      {description}
    </p>
  );
}

export { SectionDescription };
