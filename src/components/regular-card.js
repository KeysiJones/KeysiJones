import { useSelector } from "react-redux";

function RegularCard({ image, openLink, link, description, hasBorder }) {
  const theme = useSelector((state) => state.theme.value);
  const darkMode = theme === "dark";
  return (
    <div
      className={`mb-8 mx-8 my-8 bg-white rounded-b-xl rounded-t-xl project-item ${
        !darkMode && hasBorder ? "border-t-4 border-yellow-500" : null
      }`}
    >
      <img className="rounded-t-xl" alt="project" src={image} />
      <h3
        className={`text-2xl ${
          darkMode ? "text-gray-600" : "text-gray-700 "
        } text-center pb-4 m-2 font-semibold`}
      >
        {description}
      </h3>
      <div className="text-center">
        <button
          onClick={() => openLink(link)}
          className={`p-4 m-auto ${
            darkMode
              ? "bg-gray-800 hover:bg-yellow-500"
              : "hover:bg-gray-800 bg-yellow-500"
          }  rounded-b-md w-full`}
        >
          <p
            className={`font-bold text-3xl ${
              darkMode ? "text-white" : "text-white"
            }`}
          >
            Live demo
          </p>
        </button>
      </div>
    </div>
  );
}

export { RegularCard };
