function SectionTitle({ darkMode, title }) {
  return (
    <h2
      className={`font-semibold text-white text-center text-6xl sm:text-7xl my-8`}
    >
      {title}
    </h2>
  );
}

export { SectionTitle };
