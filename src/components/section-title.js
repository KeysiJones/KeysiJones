function SectionTitle({ darkMode, title }) {
  return (
    <h2
      className={`${
        darkMode ? "text-green-400" : "text-green-500"
        } font-bold text-center text-4xl my-8`}
    >
      {title}
    </h2>
  );
}

export { SectionTitle };
