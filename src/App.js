import "./App.css";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import institutoAdmin from "./fotos/instituto-admin.png";
import instipoa from "./fotos/instipoa.png";
import jccarretos from "./fotos/jccarretos.png";
import thug from "./fotos/keysiredglasses.png";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import thugBlack from "./fotos/keysibordered.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faLinkedin, faCheckSquare, faCoffee);
const openLink = (url) => window.open(url, "_blank");
function App() {
  useEffect(() => {
    new Splide(".splide").mount();
  }, []);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <div className={`${darkMode ? "bg-gray-700" : "bg-white"} h-screen`}>
      <div className={`${darkMode ? "bg-gray-700" : "bg-white"} p-2`}>
        <div className="blink">
          {/* <div className="ml-8">
            <label className="text-right m-auto">
              <Switch
                onChange={() => {
                  darkMode
                    ? localStorage.setItem("theme", "normal")
                    : localStorage.setItem("theme", "dark");
                  setDarkMode(!darkMode);
                }}
                checked={darkMode}
                onColor="#1f2937"
              />
            </label>
          </div> */}
          <div className="flex flex-col gap-1" id="aboutme">
            <img
              id="thug"
              className="m-auto mt-2 -mb-8"
              alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
              src={darkMode ? thugBlack : thug}
            />

            <div id="myinfo">
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
                    onColor="#1f2937"
                    offColor="#1f2937"
                    checkedIcon={
                      <FontAwesomeIcon icon={faSun} size="2x" color="white" />
                    }
                    uncheckedIcon={
                      <FontAwesomeIcon
                        icon={faMoon}
                        size="2x"
                        flip="horizontal"
                        className="ml-1 text-gray-400"
                      />
                    }
                  />
                </label>
              </div>
              <h1
                className={`${
                  darkMode ? "text-white" : "text-gray-700"
                } font-semibold text-center text-3xl mx-8`}
              >
                Keysi Jones R. Fernandes
              </h1>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-500"
                } text-center font-semibold text-xl mx-8`}
              >
                Frontend Web Developer
              </p>

              <div
                id="main-buttons"
                className="flex mx-4 mt-8 flex-col text-center justify-center 1s"
              >
                <div
                  className={`p-4 m-4 ${
                    darkMode ? "bg-gray-800" : "bg-red-400"
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
              darkMode ? "text-white" : "text-gray-600"
            } font-bold py-4 text-center text-4xl`}
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
                    <a href="https://jccarretos.vercel.app/">
                      <img
                        className="rounded-t-xl"
                        alt="project"
                        src={jccarretos}
                      />
                    </a>
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
                          darkMode ? "bg-gray-800" : "bg-red-400"
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
                    <a href="https://instituto-helper.netlify.app/">
                      <img
                        className="rounded-t-xl"
                        alt="project"
                        src={instipoa}
                      />
                    </a>
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
                          darkMode ? "bg-gray-800" : "bg-red-400"
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
                    <a href="https://github.com/KeysiJones/instituto-admin">
                      <img
                        className="rounded-t-xl"
                        alt="project"
                        src={institutoAdmin}
                      />
                    </a>
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
                          darkMode ? "bg-gray-800" : "bg-red-400"
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
              <a href="https://jccarretos.vercel.app/">
                <img className="rounded-t-xl" alt="project" src={jccarretos} />
              </a>
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
                    darkMode ? "bg-gray-800" : "bg-red-400"
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
              <a href="https://instituto-helper.netlify.app/">
                <img className="rounded-t-xl" alt="project" src={instipoa} />
              </a>
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
                    darkMode ? "bg-gray-800" : "bg-red-400"
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
              <a href="https://github.com/KeysiJones/instituto-admin">
                <img
                  className="rounded-t-xl"
                  alt="project"
                  src={institutoAdmin}
                />
              </a>
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
                    darkMode ? "bg-gray-800" : "bg-red-400"
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
