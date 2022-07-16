//Libs
import React from "react";
import { useSelector } from "react-redux";

//Custom components
import {
  AboutMe,
  Carrousel,
  CarrouselCard,
  Footer,
  SectionTitle,
} from "./components";

//Styles
import "./App.css";
import "./App.css";

//Project pictures
import blogPicture from "./fotos/blog.png";
import institutoAdmin from "./fotos/instituto-admin.jpg";
import instipoa from "./fotos/instipoa.jpg";
import quiz from "./fotos/quiz.jpg";

const openLink = (url) => window.open(url, "_blank");

function App() {
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === "dark";

  return (
    <div
      style={{ minWidth: "412px" }}
      className={`${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      } h-screen`}
    >
      <div
        className={`${
          darkMode
            ? "bg-gray-800"
            : "bg-gray-100"
        } py-2`}
      >
        <div className="blink">
          <AboutMe />
          <SectionTitle darkMode={darkMode} title="Personal projects" />
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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
