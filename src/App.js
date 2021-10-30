import "./App.css";
// import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
          <div className="ml-8">
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
          </div>
          <div className="flex flex-col gap-1" id="aboutme">
            <img
              id="thug"
              className="m-auto mt-2 -mb-8"
              alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
              src={darkMode ? thugBlack : thug}
            />
            <div id="myinfo">
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
                <button
                  onClick={() =>
                    openLink(
                      "https://wa.me/5551993667706?text=Oi Keysi Jones =D"
                    )
                  }
                  className={`p-4 m-4 ${
                    darkMode ? "bg-gray-800" : "bg-red-400"
                  } text-white rounded-xl`}
                >
                  <p className="font-bold text-3xl">Contact me</p>
                </button>
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
                    } rounded-b-xl rounded-t-xl`}
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
                          openLink(
                            "https://github.com/KeysiJones/instituto-admin"
                          )
                        }
                        className={`p-4 m-auto ${
                          darkMode ? "bg-gray-800" : "bg-red-400"
                        } text-white rounded-b-xl w-full`}
                      >
                        <p className="font-bold text-3xl">Visitar</p>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div
                    className={`mb-8 ${
                      darkMode ? "bg-white" : " bg-gray-200 "
                    } rounded-b-xl rounded-t-xl`}
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
                          openLink(
                            "https://github.com/KeysiJones/instituto-admin"
                          )
                        }
                        className={`p-4 m-auto ${
                          darkMode ? "bg-gray-800" : "bg-red-400"
                        } text-white rounded-b-xl w-full`}
                      >
                        <p className="font-bold text-3xl">Visitar</p>
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
                    } rounded-b-xl rounded-t-xl`}
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
                        <p className="font-bold text-3xl">Visitar</p>
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
                  <p className="font-bold text-3xl">Visitar</p>
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
                  <p className="font-bold text-3xl">Visitar</p>
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
                  <p className="font-bold text-3xl">Visitar</p>
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
