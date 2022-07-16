function SectionTitle({ darkMode, title }) {
  return (
    <h2
      className={`${
        darkMode ? "text-yellow-400" : "text-yellow-500"
      } font-bold text-center text-5xl my-8`}
    >
      {title}
    </h2>
  );
}

export { SectionTitle };
