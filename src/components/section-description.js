function SectionDescription({ darkMode, description }) {
  return (
    <p
      className={`${
        darkMode ? "text-white" : "text-gray-700"
      } text-center text-3xl sm:mx-16`}
    >
      {description}
    </p>
  );
}

export { SectionDescription };
