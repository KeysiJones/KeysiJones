import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactCard({ darkMode }) {
  const openLink = (url) => window.open(url, "_blank");

  return (
    <div
      id="main-buttons"
      className="flex mx-4 mt-8 flex-col text-center justify-center 1s"
    >
      <div
        className={`p-2 ${
          darkMode ? "bg-gray-700 text-green-400" : "bg-green-500 text-white"
        } rounded-xl font-bold text-5xl lg:text-6xl flex justify-around`}
      >
        <button
          onClick={() => openLink("https://www.linkedin.com/in/keysijones/")}
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </button>
        <button onClick={() => openLink("https://github.com/KeysiJones")}>
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </button>
        <button onClick={() => openLink("https://twitter.com/keysi_jones")}>
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </button>
      </div>
    </div>
  );
}

export { ContactCard };
