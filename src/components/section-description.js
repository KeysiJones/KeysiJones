function SectionDescription({ description, darkMode }) {
  return (
    <p
      className={`font-extralight text-white text-center text-3xl lg:text-4xl 3xl:text-5xl sm:mx-16 lg:mx-32`}
    >
      {description}
    </p>
  );
}

export { SectionDescription };
