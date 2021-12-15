import "./App.css";
import institutoAdmin from "./fotos/instituto-admin.png";
import instipoa from "./fotos/instipoa.png";
import jccarretos from "./fotos/jccarretos.png";
import { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import thugBlack from "./fotos/keysipadrao.png";
import blogPicture from "./fotos/blog.png";
import React from "react";
import {
  Footer,
  ContactCard,
  Carrousel,
  CarrouselCard,
  SectionTitle,
  RegularCard,
  SectionDescription,
} from "./components";
import { ThemeSwitcher } from "./components/theme-switcher";
import { useSelector } from "react-redux";

const openLink = (url) => window.open(url, "_blank");

function App() {
  const theme = useSelector((state) => state.theme.value);
  const darkMode = theme === "dark";

  useEffect(() => {
    new Splide(".splide").mount();
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-gradient-to-br from-gray-800 to-gray-700" : "bg-white"
      } h-screen`}
    >
      <div
        className={`${
          darkMode ? "bg-gradient-to-br from-gray-800 to-gray-700" : "bg-white"
        } py-2`}
      >
        <div className="blink">
          <div
            className="flex flex-col md:flex-row gap-1 sm:mt-12 sm:mb-32"
            id="aboutme"
          >
            <div className="self-center mb-4" id="switch-small">
              <ThemeSwitcher />
            </div>
            <div className="mx-auto">
              <img
                id="thug"
                className={`mt-8 ${
                  darkMode
                    ? "bg-gradient-to-br from-green-400 to-cyan-500"
                    : "bg-gradient-to-br from-green-400 to-green-300"
                } rounded-full`}
                alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
                src={thugBlack}
              />
            </div>
            <div className="flex flex-col self-center m-auto">
              <div className="self-center mb-4" id="switch-big">
                <ThemeSwitcher />
              </div>
              <div id="myinfo" className="rounded-3xl">
                <div>
                  <h1 className="font-semibold text-center text-5xl md:text-7xl mx-auto">
                    {window.innerWidth < 452 ? (
                      <span
                        className={`${
                          darkMode ? "text-white" : "text-gray-700"
                        }`}
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
                        className={`${
                          darkMode ? "text-white" : "text-gray-700"
                        }`}
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
                {window.innerWidth > 452 ? <ContactCard /> : null}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row m-auto mx-4 sm:mx-8 items-center gap-1 sm:my-32">
            <div>
              <SectionTitle title="About me" />
              <SectionDescription
                description="I'm a software engineer that likes to create beautiful
                interfaces, innovate, help others, solve problems and make
                people's lives easier."
              />
            </div>
            <div>
              <SectionTitle title="Hobbies" />
              <SectionDescription
                description="In my free time, I like to go out with my wife, watch movies,
                chat with people on Discord to improve my English, walk my dog
                Maya and create software."
              />
            </div>
          </div>
          <SectionTitle title="My projects" />
          <Carrousel>
            <CarrouselCard
              link="https://jccarretos.vercel.app/"
              openLink={openLink}
              cardImage={jccarretos}
              description="JC Carretos is a website made to spread my father's
                      freight services."
            />
            <CarrouselCard
              link="https://instituto-helper.netlify.app/"
              openLink={openLink}
              cardImage={instipoa}
              description="Instipoa is a web app made to make the access to our
                  Institute classes easy."
            />
            <CarrouselCard
              link="https://instituto-admin.vercel.app/"
              openLink={openLink}
              cardImage={institutoAdmin}
              description="Instituto admin was developed to administrate Instipoa's
                  classes."
            />
          </Carrousel>
          <div id="meus-projetos">
            <RegularCard
              image={jccarretos}
              openLink={openLink}
              link="https://jccarretos.vercel.app"
              description="JC Carretos is a website made to help my father's freight business"
            />
            <RegularCard
              image={instipoa}
              openLink={openLink}
              link="https://instituto-helper.netlify.app"
              description="Instipoa is an web app made to make the access to our Institute
              classes easy."
            />
          </div>
          <div id="meus-projetos">
            <RegularCard
              hasBorder
              image={blogPicture}
              openLink={openLink}
              link="https://keysijones-blog.vercel.app"
              description="My personal blog to write about tech, check it out."
            />

            <RegularCard
              hasBorder
              image={institutoAdmin}
              openLink={openLink}
              link="https://instituto-admin.vercel.app"
              description="Instituto admin was developed to administrate Instipoa's
              classes."
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
