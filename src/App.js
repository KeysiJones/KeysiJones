import "./App.css";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import institutoAdmin from "./fotos/instituto-admin.png";
import instipoa from "./fotos/instipoa.png";
import jccarretos from "./fotos/jccarretos.png";
import thug from "./fotos/keysiredsquare.png";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import thugBlack from "./fotos/keysiblacksquare.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <div className="flex flex-col md:flex-row gap-1" id="aboutme">
            <div className="mx-auto">
              <img
                id="thug"
                className="mt-2 -mb-8"
                alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
                src={darkMode ? thugBlack : thug}
              />
            </div>
            <div id="myinfo" className="rounded-3xl">
              <div className="self-center mb-4">
                <label className="text-right m-auto text-sm">
                  <Switch
                    onChange={() => {
                      darkMode
                        ? localStorage.setItem("theme", "normal")
                        : localStorage.setItem("theme", "dark");
                      setDarkMode(!darkMode);
                    }}
                    checked={darkMode}
                    onColor="#374151"
                    offColor="#F87171"
                    checkedIcon={null}
                    uncheckedIcon={null}
                  />
                </label>
              </div>
              <div>
                <h1
                  className={`${
                    darkMode ? "text-white" : "text-gray-700"
                  } font-semibold text-center text-5xl md:text-6xl mx-2`}
                >
                  Hi, i'm Keysi Jones
                </h1>

                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } text-center font-semibold text-2xl md:text-3xl lg:text-4xl mx-2 mt-2`}
                >
                  Frontend Developer
                </p>
              </div>

              <div
                id="main-buttons"
                className="flex mx-4 mt-8 flex-col text-center justify-center 1s"
              >
                <div
                  className={`p-4 ${
                    darkMode ? "bg-gray-700" : "bg-red-400"
                  } text-white rounded-xl font-bold text-5xl flex justify-around`}
                >
                  <button
                    onClick={() =>
                      openLink("https://www.linkedin.com/in/keysijones/")
                    }
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                  </button>
                  <button
                    onClick={() => openLink("https://github.com/KeysiJones")}
                  >
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                  </button>
                  <button
                    onClick={() => openLink("https://twitter.com/keysi_jones")}
                  >
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2
            className={`${
              darkMode ? "text-white" : "text-gray-700"
            } font-bold py-4 text-center text-4xl sm:text-5xl my-8`}
          >
            My projects
          </h2>

          <div className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <div
                    className={`mb-8 ${
                      darkMode
                        ? "bg-white"
                        : "bg-gray-200 border-gray-200 border-2"
                    } rounded-b-xl rounded-t-xl flex flex-col justify-between`}
                    style={{ minHeight: "61.5vh" }}
                  >
                    <img
                      className="rounded-t-xl"
                      alt="project"
                      src={jccarretos}
                    />
                    <h3
                      className={`text-2xl ${
                        darkMode ? "text-gray-600" : "text-gray-700"
                      } text-center pb-4 m-2 font-semibold`}
                    >
                      JC Carretos is a website made to spread my father's
                      freight services.
                    </h3>
                    <div className="text-center">
                      <button
                        onClick={() =>
                          openLink("https://jccarretos.vercel.app/")
                        }
                        className={`p-4 m-auto ${
                          darkMode ? "bg-gray-700" : "bg-red-400"
                        } text-white rounded-b-xl w-full`}
                      >
                        <p className="font-bold text-3xl">Ver demo</p>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div
                    className={`mb-8 ${
                      darkMode ? "bg-white" : " bg-gray-200 "
                    } rounded-b-xl rounded-t-xl flex flex-col justify-between`}
                    style={{ minHeight: "61.5vh" }}
                  >
                    <img
                      className="rounded-t-xl"
                      alt="project"
                      src={instipoa}
                    />
                    <h3
                      className={`text-2xl ${
                        darkMode ? "text-gray-600" : "text-gray-700"
                      } text-center pb-4 m-2 font-semibold`}
                    >
                      Instipoa is an web app made to make the access to our
                      Institute classes easy.
                    </h3>
                    <div className="text-center">
                      <button
                        onClick={() =>
                          openLink("https://instituto-helper.netlify.app/")
                        }
                        className={`p-4 m-auto ${
                          darkMode ? "bg-gray-700" : "bg-red-400"
                        } text-white rounded-b-xl w-full`}
                      >
                        <p className="font-bold text-3xl">Ver demo</p>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div
                    className={`mb-8 ${
                      darkMode
                        ? "bg-white"
                        : "bg-gray-200 border-gray-200 border-2"
                    } rounded-b-xl rounded-t-xl flex flex-col justify-between`}
                    style={{ minHeight: "61.5vh" }}
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
                          openLink(
                            "https://github.com/KeysiJones/instituto-admin"
                          )
                        }
                        className={`p-4 m-auto ${
                          darkMode ? "bg-gray-700" : "bg-red-400"
                        } text-white rounded-b-xl w-full`}
                      >
                        <p className="font-bold text-3xl">Ver demo</p>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="meus-projetos" className="mx-4 my-8">
            <div
              className={`mb-8 ${
                darkMode ? "bg-white" : "bg-gray-200 border-gray-200 border-2"
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
                    darkMode ? "bg-gray-700" : "bg-red-400"
                  } text-white rounded-b-xl w-full`}
                >
                  <p className="font-bold text-3xl">Ver demo</p>
                </button>
              </div>
            </div>
            <div
              className={`mb-8 ${
                darkMode ? "bg-white" : " bg-gray-200 "
              } rounded-b-xl rounded-t-xl project-item`}
            >
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
                    darkMode ? "bg-gray-700" : "bg-red-400"
                  } text-white rounded-b-xl w-full`}
                >
                  <p className="font-bold text-3xl">Ver demo</p>
                </button>
              </div>
            </div>
            <div
              className={`mb-8 ${
                darkMode ? "bg-white" : "bg-gray-200 border-gray-200 border-2"
              } rounded-b-xl rounded-t-xl project-item`}
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
                    darkMode ? "bg-gray-700" : "bg-red-400"
                  } text-white rounded-b-xl w-full`}
                >
                  <p className="font-bold text-3xl">Ver demo</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
