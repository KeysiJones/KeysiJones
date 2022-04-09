import { useSelector } from "react-redux";

function CarrouselCard({ cardImage, link, description, openLink }) {
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === "dark";
  return (
    <li className="splide__slide">
      <div className="bg-white rounded-sm flex flex-col justify-between h-full">
        <img className="rounded-t-xl" alt="project" src={cardImage} />
        <h3
          className={`text-2xl ${
            darkMode ? "text-gray-600" : "text-gray-700"
          } text-center pb-4 m-2 font-semibold`}
        >
          {description}
        </h3>
        <div className="text-center">
          <button
            onClick={() => openLink(link)}
            className={`p-4 m-auto ${
              darkMode
                ? "bg-gray-700 text-yellow-400"
                : "bg-yellow-400 text-white"
            }  rounded-b-sm w-full`}
          >
            <p className="font-bold text-4xl mb-4">Live demo</p>
          </button>
        </div>
      </div>
    </li>
  );
}

export { CarrouselCard };
