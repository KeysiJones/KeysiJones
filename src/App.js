import "./App.css";
import institutoAdmin from "./fotos/instituto-admin.PNG";
import instipoa from "./fotos/instipoa.PNG";
import quiz from "./fotos/quiz.PNG"
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
    style={{minWidth: '412px'}}
      className={`${
        darkMode ? "bg-gradient-to-br from-gray-800 to-gray-700" : "bg-gray-100"
      } h-screen`}
    >
      <div
        className={`${
          darkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-700"
            : "bg-gray-100"
        } py-2`}
      >
        <div className="blink">
          <AboutMe />
          <SectionTitle title="Personal projects" />
          <Carrousel>
            <CarrouselCard
              link="https://keysijones-blog.vercel.app/"
              openLink={openLink}
              cardImage={blogPicture}
              description="My personal blog to write about tech, check it out."
            />
            <CarrouselCard
              link="https://keysi-quiz.vercel.app/"
              openLink={openLink}
              cardImage={quiz}
              description="This is a quiz app i made with React."
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
              image={blogPicture}
              openLink={openLink}
              link="https://keysijones-blog.vercel.app"
              description="My personal blog to write about tech, check it out."
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
              image={quiz}
              openLink={openLink}
              link="https://keysi-quiz.vercel.app"
              description="This is a quiz app i made with React."
            />
            <RegularCard
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
