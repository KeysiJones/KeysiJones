import "./App.css";
import institutoAdmin from "./fotos/instituto-admin.png";
import instipoa from "./fotos/instipoa.png";
import jccarretos from "./fotos/jccarretos.png";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import thugBlack from "./fotos/keysipadrao.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { CarrouselCard } from "./components/carrousel-card";
import { Carrousel } from "./components/carrousel";
import { ContactCard } from "./components/contact-card";
import { Footer } from "./components/footer";

const openLink = (url) => window.open(url, "_blank");
function App() {
  useEffect(() => {
    new Splide(".splide").mount();
  }, []);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-white"} h-screen`}>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-2`}>
        <div className="blink">
          <div
            className="flex flex-col md:flex-row gap-1 sm:mt-12 sm:mb-32"
            id="aboutme"
          >
            <div className="mx-auto">
              <img
                id="thug"
                className={`mt-8 ${
                  darkMode ? "bg-green-400" : "bg-green-500"
                } rounded-full`}
                alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
                src={thugBlack}
              />
            </div>
            <div id="myinfo" className="rounded-3xl">
              <div className="self-center mb-4">
                <label className="text-right m-auto text-sm">
                  <Switch
                    onChange={() => {
                      localStorage.setItem(
                        "theme",
                        darkMode ? "normal" : "dark"
                      );
                      setDarkMode(!darkMode);
                    }}
                    checked={darkMode}
                    onColor="#374151"
                    offColor="#374151"
                    uncheckedIcon={
                      <FontAwesomeIcon
                        icon={faSun}
                        size="1x"
                        className="ml-1 mb-0.5"
                      />
                    }
                    className={`${
                      darkMode ? "text-white" : "text-yellow-400"
                    } text-2xl`}
                    checkedIcon={<FontAwesomeIcon icon={faMoon} size="1x" />}
                    onHandleColor="#34D399"
                  />
                </label>
              </div>
              <div>
                <h1 className="font-semibold text-center text-5xl md:text-7xl mx-auto">
                  {window.innerWidth < 452 ? (
                    <span
                      className={`${darkMode ? "text-white" : "text-gray-700"}`}
                    >
                      Hi, i'm{" "}
                      <span
                        className={`${
                          darkMode ? "text-green-400" : "text-green-500"
                        }`}
                      >
                        Keysi
                      </span>
                    </span>
                  ) : (
                    <span
                      className={`${darkMode ? "text-white" : "text-gray-700"}`}
                    >
                      Hi, i'm{" "}
                      <span
                        className={`${
                          darkMode ? "text-green-400" : "text-green-500"
                        }`}
                      >
                        Keysi Jones
                      </span>
                    </span>
                  )}
                </h1>

                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-700"
                  } text-center font-semibold text-3xl lg:text-5xl mx-2 mt-2`}
                >
                  <span>Frontend</span> Developer
                </p>
              </div>
              <ContactCard darkMode={darkMode} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row m-auto mx-4 sm:mx-8 items-center gap-1 sm:my-32">
            <div>
              <h2
                className={`${
                  darkMode ? "text-green-400" : "text-green-500"
                } font-bold text-center text-5xl my-8`}
              >
                About me
              </h2>
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-700"
                } text-center text-3xl sm:mx-16`}
              >
                I'm a software engineer that likes to create beautiful
                interfaces, innovate, help others, solve problems and make
                people's lives easier.
              </p>
            </div>
            <div>
              <h2
                className={`${
                  darkMode ? "text-green-400" : "text-green-500"
                } font-bold text-center text-5xl my-8`}
              >
                Hobbies
              </h2>
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-700"
                } text-center text-3xl sm:mx-16`}
              >
                In my free time, I like to go out with my wife, watch movies,
                chat with people on Discord to improve my English, walk my dog
                Maya and create software.
              </p>
            </div>
          </div>
          <h2
            className={`${
              darkMode ? "text-green-400" : "text-green-500"
            } font-bold py-4 text-center text-5xl my-8`}
          >
            My projects
          </h2>
          <Carrousel>
            <CarrouselCard
              link="https://jccarretos.vercel.app/"
              openLink={openLink}
              cardImage={jccarretos}
              darkMode={darkMode}
              description="JC Carretos is a website made to spread my father's
                      freight services."
            />
            <CarrouselCard
              link="https://instituto-helper.vercel.app/"
              openLink={openLink}
              cardImage={instipoa}
              darkMode={darkMode}
              description="Instipoa is a web app made to make the access to our
                  Institute classes easy."
            />
            <CarrouselCard
              link="https://instituto-admin.vercel.app/"
              openLink={openLink}
              cardImage={institutoAdmin}
              darkMode={darkMode}
              description="Instituto admin was developed to administrate Instipoa's
                  classes."
            />
          </Carrousel>
          <div id="meus-projetos" className="mx-4 my-8">
            <div
              className={`mb-8 ${
                darkMode ? "bg-white" : "bg-white"
              } rounded-b-xl rounded-t-xl project-item`}
            >
              <img className="rounded-t-xl" alt="project" src={jccarretos} />
              <h3
                className={`text-2xl ${
                  darkMode ? "text-gray-600" : "text-gray-700"
                } text-center pb-4 m-2 font-semibold`}
              >
                JC Carretos is a website made to spread my father's freight
                services.
              </h3>
              <div className="text-center">
                <button
                  onClick={() =>
                    openLink("https://github.com/KeysiJones/instituto-admin")
                  }
                  className={`p-4 m-auto ${
                    darkMode
                      ? "bg-gray-700 text-green-400"
                      : "bg-green-500 text-white"
                  }  rounded-b-xl w-full`}
                >
                  <p className="font-bold text-3xl">Ver demo</p>
                </button>
              </div>
            </div>
            <div className="mb-8 bg-white rounded-b-xl rounded-t-xl project-item">
              <img className="rounded-t-xl" alt="project" src={instipoa} />
              <h3
                className={`text-2xl ${
                  darkMode ? "text-gray-600" : "text-gray-700"
                } text-center pb-4 m-2 font-semibold`}
              >
                Instipoa is an web app made to make the access to our Institute
                classes easy.
              </h3>
              <div className="text-center">
                <button
                  onClick={() =>
                    openLink("https://github.com/KeysiJones/instituto-admin")
                  }
                  className={`p-4 m-auto ${
                    darkMode
                      ? "bg-gray-700 text-green-400"
                      : "bg-green-500 text-white"
                  }  rounded-b-xl w-full`}
                >
                  <p className="font-bold text-3xl">Ver demo</p>
                </button>
              </div>
            </div>
            <div
              className={`mb-8 bg-white rounded-b-xl rounded-t-xl project-item ${
                !darkMode ? "border-t-4 border-green-500" : null
              }`}
            >
              <img
                className="rounded-t-xl"
                alt="project"
                src={institutoAdmin}
              />
              <h3
                className={`text-2xl ${
                  darkMode ? "text-gray-600" : "text-gray-700 "
                } text-center pb-4 m-2 font-semibold`}
              >
                Instituto admin was developed to administrate Instipoa's
                classes.
              </h3>
              <div className="text-center">
                <button
                  onClick={() =>
                    openLink("https://github.com/KeysiJones/instituto-admin")
                  }
                  className={`p-4 m-auto ${
                    darkMode
                      ? "bg-gray-700 text-green-400"
                      : "bg-green-500 text-white"
                  }  rounded-b-md w-full`}
                >
                  <p className="font-bold text-3xl">Ver demo</p>
                </button>
              </div>
            </div>
          </div>
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
