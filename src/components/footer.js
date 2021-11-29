import { useContext } from "react";
import { AppContext } from "../App";
import { ContactCard } from "./contact-card";

function Footer() {
  const theme = useContext(AppContext);
  return (
    <div>
      <p
        className={`mt-4 text-center ${
          theme.darkMode ? "text-white" : "text-gray-700"
        } text-3xl font-bold mb-2`}
      >
        Follow me at
      </p>
      <footer
        className={`${
          theme.darkMode
            ? "text-white bg-gray-700"
            : "text-gray-700 border-gray-700"
        } text-center text-xl`}
      >
        <ContactCard footer={true} />
      </footer>
      <p
        className={`${
          theme.darkMode ? "text-white" : "text-gray-700 border-gray-700"
        } text-center text-xl`}
      >
        &copy; {new Date().getFullYear()} Keysi Jones. All rights reserved
      </p>
    </div>
  );
}

export { Footer };
