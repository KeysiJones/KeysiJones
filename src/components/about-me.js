import { useSelector } from "react-redux";
import { ContactCard, SectionDescription, SectionTitle } from "./";
import { ThemeSwitcher } from "./theme-switcher";
import thugBlack from "../fotos/cropped-keysi.jpeg";

function AboutMe() {
  const theme = useSelector((state) => state.theme.value);
  const darkMode = theme === "dark";
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-1 sm:my-12" id="aboutme">
        <div className="self-end mb-4 mr-8" id="switch-small">
          <ThemeSwitcher />
        </div>
        <div className="mx-auto">
          <img
            id="thug"
            className={`mt-8 ${
              darkMode
                ? "bg-gradient-to-br from-yellow-400 to-cyan-500"
                : "bg-gradient-to-br from-yellow-400 to-yellow-300"
            } rounded-full`}
            alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
            src={thugBlack}
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col self-center m-auto sm:mt-12">
          <div id="myinfo" className="rounded-3xl">
            <div>
              <h1 className="font-semibold text-center text-3xl md:text-4xl mx-auto">
                {window.innerWidth < 452 ? (
                  <span
                    className={`${darkMode ? "text-white" : "text-gray-700"}`}
                  >
                    Hi, i'm{" "}
                    <span
                      className={`${
                        darkMode ? "text-yellow-400" : "text-yellow-400"
                      }`}
                    >
                      Keysi
                    </span>
                  </span>
                ) : (
                  <span
                    className={`${darkMode ? "text-white" : "text-gray-700"}`}
                  >
                    Hi, i'm{" "}
                    <span
                      className={`${
                        darkMode ? "text-yellow-400" : "text-yellow-400"
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
                } text-center font-semibold text-2xl lg:text-4xl mx-2 mt-2`}
              >
                <span>Fullstack Javascript</span> Engineer (MERN)
              </p>
            </div>
            {window.innerWidth >= 375 ? <ContactCard /> : null}
          </div>
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row m-auto mx-8 sm:mx-12 items-center gap-1 sm:my-12 lg:my-32">
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
    </div>
  );
}

export { AboutMe };
