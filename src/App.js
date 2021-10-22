import "./App.css";
// import {
// fab,
// faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import keysiPhoto from "./fotos/keysi-contorno.png";
import institutoAdmin from "./fotos/instituto-admin.png";
import instipoa from "./fotos/instipoa.png";
import jccarretos from "./fotos/jccarretos.png";

// library.add(fab, faLinkedin, faCheckSquare, faCoffee);
const openWhatsApp = () =>
  window.location.replace("https://wa.me/5551993667706?text=Oi Keysi Jones =D");
function App() {
  return (
    <div className="bg-yellow-300 h-screen">
      <div className="bg-yellow-300 p-2">
        <div>
          <p
            style={{ textShadow: "#f3b80c -2px 4px 0px" }}
            className="text-gray-600 font-bold pt-4 text-center text-4xl"
          >
            Meu nome é Jones... <br /> Keysi Jones !
          </p>
        </div>
        <div>
          <img
            className="m-auto rounded-full"
            alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
            src={keysiPhoto}
          />
          <div
            id="main-buttons"
            className="flex m-4 flex-col text-center justify-center"
          >
            <button
              onClick={() => window.location.replace("#")}
              className="p-4 m-4 bg-red-400 text-white rounded-xl"
            >
              <p className="font-bold">Meus projetos</p>
            </button>
            <button
              onClick={openWhatsApp}
              className="p-4 m-4 bg-red-400 text-white rounded-xl"
            >
              <p className="font-bold">Fale comigo</p>
            </button>
          </div>
          <div className="m-4">
            <div className="pb-8 px-4">
              <a href="https://jccarretos.vercel.app/">
                <img className="rounded-md" alt="project" src={jccarretos} />
              </a>
            </div>
            <div className="pb-8 px-4">
              <a href="https://instituto-helper.netlify.app/">
                <img className="rounded-md" alt="project" src={instipoa} />
              </a>
            </div>
            <div className="pb-8 px-4">
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
