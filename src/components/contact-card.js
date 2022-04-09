import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { FaReact, FaNodeJs } from "react-icons/fa";

function ContactCard({ footer, icons }) {
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === "dark";
  const openLink = (url) => window.open(url, "_blank");

  return (
    <div
      id="main-buttons"
      className={`${
        footer ? "" : "mx-8"
      } flex mt-8 mb-4 flex-col text-center justify-center`}
    >
      <div
        className={`p-2 ${darkMode ? "text-yellow-400" : "text-yellow-400"} ${
          footer ? "" : "rounded-xl"
        } font-bold text-5xl lg:text-6xl flex justify-center`}
      >
        {icons ? (
          <div>
            <button
              onClick={() =>
                openLink("https://www.linkedin.com/in/keysijones/")
              }
              className="mx-8 text-blue-500"
            >
              <FontAwesomeIcon icon={icons[0]} size="sm" />
            </button>
            <button
              onClick={() => openLink("https://github.com/KeysiJones")}
              className={`mx-8 ${darkMode ? "text-white" : "text-gray-700"}`}
            >
              <FontAwesomeIcon icon={icons[1]} size="sm" />
            </button>
            <button
              onClick={() => openLink("https://twitter.com/keysi_jones")}
              className="mx-8 text-blue-400"
            >
              <FontAwesomeIcon icon={icons[2]} size="sm" />
            </button>
          </div>
        ) : (
          <div className="self-center flex p-2 justify-evenly w-full">
            <FaReact size={65} color="#61DBFB" id="react-logo" />
            <FaNodeJs size={65} color="#50b148" />
          </div>
        )}
      </div>
    </div>
  );
}

export { ContactCard };
