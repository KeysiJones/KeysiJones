import { useSelector } from "react-redux";
import { ContactCard } from "./contact-card";

function Footer() {
  const theme = useSelector((state) => state.theme.value);
  const darkMode = theme === "dark";
  return (
    <div>
      <p
        className={`mt-4 text-center ${
          darkMode ? "text-white" : "text-gray-700"
        } text-3xl font-bold mb-2`}
      >
        Follow me at
      </p>
      <footer
        className={`${
          theme.darkMode ? "text-white" : "text-gray-700 border-gray-700"
        } text-center text-xl`}
      >
        <ContactCard footer={true} />
      </footer>
      <p
        className={`${
          darkMode ? "text-white" : "text-gray-700 border-gray-700"
        } text-center text-xl`}
      >
        &copy; {new Date().getFullYear()} Keysi Jones. All rights reserved
      </p>
    </div>
  );
}

export { Footer };
