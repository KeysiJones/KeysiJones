import { useContext } from "react";
import { AppContext } from "../App";
function SectionDescription({ description }) {
  const theme = useContext(AppContext);

  return (
    <p
      className={`${
        theme.darkMode ? "text-white" : "text-gray-700"
      } text-center text-3xl sm:mx-16`}
    >
      {description}
    </p>
  );
}

export { SectionDescription };
