import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AppContext } from "../App";

function ContactCard({ footer }) {
  const theme = useContext(AppContext);
  const openLink = (url) => window.open(url, "_blank");

  return (
    <div
      id="main-buttons"
      className={`${
        footer ? "" : "mx-8"
      } flex mt-8 mb-4 flex-col text-center justify-center 1s`}
    >
      <div
        className={`p-2 ${
          theme.darkMode ? " text-green-400" : "bg-green-500 text-white"
        } ${
          footer ? "" : "rounded-xl"
        } font-bold text-5xl lg:text-6xl flex justify-center`}
      >
        <button
          onClick={() => openLink("https://www.linkedin.com/in/keysijones/")}
          className="mx-8"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </button>
        <button
          onClick={() => openLink("https://github.com/KeysiJones")}
          className="mx-8"
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </button>
        <button
          onClick={() => openLink("https://twitter.com/keysi_jones")}
          className="mx-8"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </button>
      </div>
    </div>
  );
}

export { ContactCard };
