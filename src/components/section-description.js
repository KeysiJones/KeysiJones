function SectionDescription({ description }) {
  return (
    <p
      style={{ lineHeight: 'inherit' }}
      className='text-2xl font-thin text-center text-white line-h lg:text-3xl 2xl:text-4xl sm:mx-16 lg:mx-32'
    >
      {description}
    </p>
  );
}

export { SectionDescription };
