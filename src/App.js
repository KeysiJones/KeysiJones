import "./App.css";
import institutoAdmin from "./fotos/instituto-admin.png";
import instipoa from "./fotos/instipoa.png";
import jccarretos from "./fotos/jccarretos.png";
import { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import blogPicture from "./fotos/blog.png";
import React from "react";
import {
  Footer,
  Carrousel,
  CarrouselCard,
  SectionTitle,
  RegularCard,
} from "./components";
import { useSelector } from "react-redux";
import { AboutMe } from "./components/about-me";

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
          <AboutMe />
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
