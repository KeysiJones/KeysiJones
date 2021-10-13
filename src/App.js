import "./App.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Splide from "@splidejs/splide";
import frete from "./fotos/frete.jpeg";
// import frete2 from "./fotos/frete2.jpeg";
import carro from "./fotos/carro.jpeg";
import {
  fab,
  faLinkedin,
  // faFacebook,
  // faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faLinkedin, faCheckSquare, faCoffee);

function App() {
  useEffect(() => {
    new Splide(".splide").mount();
  }, []);
  // axios
  //   .get("https://api.github.com/users/KeysiJones")
  //   .then((res) => console.log(res));
  return (
    <div className="md:text-center text-left">
      <div id="header" className="py-4 bg-red-400">
        <p className="text-2xl text-black pl-4 text-center shadow-3xl">
          JC CARRETOS{" "}
          <a
            className="underline"
            href="https://wa.me/5551996524349/?text=Oi, tudo bem ? eu gostaria de fazer um orçamento de frete."
          >
            <FontAwesomeIcon icon={faWhatsapp} size="1x" />
          </a>
        </p>
        <p className="text-center text-white text-xl">
          Qualidade e confiança tem nome
        </p>
      </div>
      <div className="p-4 mt-4">
        <p className="text-2xl font-thin text-center">
          Aqui na JC Carretos <b>nos importamos com você</b> e com seus
          pertences.
        </p>
        <div
          id="image-slider"
          className="splide text-center m-auto inline-block mt-8"
        >
          <div
            className="splide__track"
            style={{ textAlign: "-webkit-center" }}
          >
            <ul className="splide__list">
              <li className="splide__slide">
                <img
                  alt="caminhonete preta com móvel na parte de trás"
                  src={frete}
                  className="rounded"
                ></img>
              </li>
              {/* <li className="splide__slide">
                <img src={frete2} className="rounded"></img>
              </li> */}
              <li className="splide__slide">
                <img
                  alt="caminhonete com móvel na parte de trás"
                  src={carro}
                  className="rounded"
                ></img>
              </li>
            </ul>
          </div>

          <div className="splide__progress">
            <div className="splide__progress__bar"></div>
          </div>
        </div>
        <p className="text-2xl mt-4 font-thin text-center">
          Fazemos <b>pequenos fretes/carretos</b> em Porto Alegre e em cidades
          vizinhas.
        </p>
        <p className="text-2xl mt-4 font-thin text-center">
          Não fica no aperto, chama a JC e{" "}
          <a
            className="font-bold"
            href="https://wa.me/5551980179373/?text=Oi, tudo bem ? eu gostaria de fazer um orçamento de frete."
          >
            AGENDA AGORA
          </a>{" "}
          o teu carreto !
        </p>
        <p className="text-2xl mt-4 font-thin text-center">
          E para agendar <b>é muito fácil</b>, é só tocar no ícone do whats aqui
          em baixo.
        </p>

        <p className="text-2xl mt-4 font-thin text-center">
          Agendar um carreto nunca foi tão fácil.
        </p>
        <p className="text-2xl mt-4 font-thin text-center">
          <a
            className="underline"
            href="https://wa.me/5551996524349/?text=Oi, tudo bem ? eu gostaria de fazer um orçamento de frete."
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>{" "}
        </p>
        <p className="text-2xl mt-4 font-thin text-center">
          Whatsapp: (51){" "}
          <a
            className="underline"
            href="https://wa.me/5551996524349/?text=Oi, tudo bem ? eu gostaria de fazer um orçamento de frete."
          >
            996524349{" "}
          </a>
          /{" "}
          <a
            className="underline"
            href="https://wa.me/5551980179373/?text=Oi, tudo bem ? eu gostaria de fazer um orçamento de frete."
          >
            980179373
          </a>
        </p>
      </div>
      <div id="footer" className="py-4 bg-red-400">
        <p className="text-center text-white text-xl mb-2">
          Qualidade e confiança tem nome
        </p>
        <p className="text-2xl text-black pl-4 text-center shadow-3xl">
          JC CARRETOS{" "}
          <a
            className="underline"
            href="https://wa.me/5551996524349/?text=Oi, tudo bem ? eu gostaria de fazer um orçamento de frete."
          >
            <FontAwesomeIcon icon={faWhatsapp} size="1x" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
