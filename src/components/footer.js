import { useSelector } from "react-redux";
import { ContactCard } from "./contact-card";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const icons = [faLinkedin, faGithub, faTwitter];
  const currentYear = new Date().getFullYear();
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === "dark";

  return (
    <div>
      <p
        className={`mt-4 text-center ${
          darkMode ? "text-white" : "text-gray-700"
        } text-3xl font-bold mb-2`}
      >
        Social media
      </p>
      <footer
        className={`${
          theme.darkMode ? "text-white" : "text-gray-700 border-gray-700"
        } text-center text-xl`}
      >
        <ContactCard icons={icons} footer={true} />
      </footer>
      <p
        className={`${
          darkMode ? "text-white" : "text-gray-700 border-gray-700"
        } text-center text-xl`}
      >
        &copy; {currentYear} - Keysi Jones. All rights reserved
      </p>
    </div>
  );
}

export { Footer };
