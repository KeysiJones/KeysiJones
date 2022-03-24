import { useSelector } from "react-redux";

function SectionDescription({ description }) {
  const theme = useSelector((state) => state.theme.value);
  const darkMode = theme === "dark";

  return (
    <p
      className={`${
        darkMode ? "text-white" : "text-gray-700"
      } text-center text-2xl lg:text-3xl 2xl:text-4xl sm:mx-16 lg:mx-32`}
    >
      {description}
    </p>
  );
}

export { SectionDescription };
