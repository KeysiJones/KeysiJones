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
import thug from "./fotos/keysired.png";
// import thug from "./fotos/thug.png";

// library.add(fab, faLinkedin, faCheckSquare, faCoffee);
const openWhatsApp = () =>
  window.location.replace("https://wa.me/5551993667706?text=Oi Keysi Jones =D");
function App() {
  return (
    <div className="bg-white h-screen">
      <div className="bg-white p-2">
        <div className="blink">
          <div>
            <img
              id="thug"
              style={{ transform: "scale(1.0)" }}
              className="m-auto absolute left-0 right-0 mt-4"
              alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
              src={thug}
            />
            <img
              id="regular"
              style={{ transform: "scale(1.0)", opacity: 0 }}
              className="m-auto rounded-full left-0 right-0 opacity-0"
              alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
              src={keysiPhoto}
            />
          </div>
          <div className="blink">
            <p className="text-gray-600 font-semibold pt-4 text-center text-3xl">
              Keysi Jones
            </p>
            <p className="text-gray-600 text-center text-2xl">
              Desenvolvedor Web
            </p>
          </div>
          <div
            id="main-buttons"
            className="flex m-4 flex-col text-center justify-center 1s"
          >
            <button
              onClick={() => window.location.replace("#meus-projetos")}
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
          <div id="meus-projetos">
            <p
              // style={{ textShadow: "#f3b80c -2px 4px 0px" }}
              className="text-gray-600 font-bold py-4 text-center text-3xl"
            >
              Projetos desenvolvidos
            </p>
          </div>
          <div className="m-4">
            <div className="pb-8 px-4">
              <p className="text-2xl text-gray-700 text-center mx-2 mb-8">
                JC Carretos é um projeto que desenvolvi para divulgar os
                serviços de frete que meu pai realiza.
              </p>
              <a href="https://jccarretos.vercel.app/">
                <img className="rounded-md" alt="project" src={jccarretos} />
              </a>
            </div>
            <div className="pb-8 px-4">
              <p className="text-2xl text-gray-700 text-center mx-2 mb-8">
                O Instipoa é um app feito para acessar as aulas do Instituto
                Porto Alegre.
              </p>
              <a href="https://instituto-helper.netlify.app/">
                <img className="rounded-md" alt="project" src={instipoa} />
              </a>
            </div>
            <div className="pb-8 px-4">
              <p className="text-2xl text-gray-700 text-center mx-2 mb-8">
                O Instituto admin foi desenvolvido para administrar as aulas do
                Instipoa.
              </p>
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
