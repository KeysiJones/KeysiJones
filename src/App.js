import "./App.css";
// import {
// fab,
// faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import institutoAdmin from "./fotos/instituto-admin.png";
import instipoa from "./fotos/instipoa.png";
import jccarretos from "./fotos/jccarretos.png";
import thug from "./fotos/keysivermelho.png";
// import thug from "./fotos/thug.png";

// library.add(fab, faLinkedin, faCheckSquare, faCoffee);
const openWhatsApp = () =>
  window.location.replace("https://wa.me/5551993667706?text=Oi Keysi Jones =D");
function App() {
  return (
    <div className="bg-white h-screen">
      <div className="bg-white p-2">
        <div className="blink">
          <div className="flex flex-col gap-1">
            <img
              id="thug"
              style={{ transform: "scale(1.0)" }}
              className="m-auto left-0 right-0 mt-2"
              alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
              src={thug}
            />
            <h1 className="text-gray-700 font-semibold text-center text-3xl mx-8">
              Keysi Jones R. Fernandes
            </h1>
            <p className="text-gray-500 text-center font-semibold text-xl mx-8">
              Web Developer
            </p>
          </div>
          <div
            id="main-buttons"
            className="flex m-4 flex-col text-center justify-center 1s"
          >
            <button
              onClick={openWhatsApp}
              className="p-4 m-4 bg-red-400 text-white rounded-xl"
            >
              <p className="font-bold">Contact me</p>
            </button>
          </div>
          <div id="meus-projetos">
            <h2
              // style={{ textShadow: "#f3b80c -2px 4px 0px" }}
              className="text-gray-600 font-bold py-4 text-center text-3xl"
            >
              My projects
            </h2>
          </div>
          <div className="m-4">
            <div className="pb-8 px-4">
              <h3 className="text-2xl text-gray-600 text-center mx-2 mb-8">
                JC Carretos is a website made to spread my father's freight
                services.
              </h3>
              <a href="https://jccarretos.vercel.app/">
                <img className="rounded-md" alt="project" src={jccarretos} />
              </a>
            </div>
            <div className="pb-8 px-4">
              <h3 className="text-2xl text-gray-600 text-center mx-2 mb-8">
                Instipoa is an web app made to make the access to our Institute
                classes easy.
              </h3>
              <a href="https://instituto-helper.netlify.app/">
                <img className="rounded-md" alt="project" src={instipoa} />
              </a>
            </div>
            <div className="pb-8 px-4">
              <h3 className="text-2xl text-gray-600 text-center mx-2 mb-8">
                Instituto admin was developed to administrate Instipoa's
                classes.
              </h3>
              <a href="https://github.com/KeysiJones/instituto-admin">
                <img
                  className="rounded-md"
                  alt="project"
                  src={institutoAdmin}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
