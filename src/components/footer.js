function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t-2 ${
        darkMode ? "text-white" : "text-gray-700 border-gray-700"
      } text-center text-xl`}
    >
      &copy; {new Date().getFullYear()} Keysi Jones. <p>All rights reserved</p>
    </footer>
  );
}

export { Footer };
