import { useSelector } from "react-redux";
import { ContactCard, SectionDescription, SectionTitle } from "./";
import { ThemeSwitcher } from "./theme-switcher";
import thugBlack from "../fotos/keysipadrao.png";

function AboutMe() {
  const theme = useSelector((state) => state.theme.value);
  const darkMode = theme === "dark";
  return (
    <div>
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
                    className={`${darkMode ? "text-white" : "text-gray-700"}`}
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
                    className={`${darkMode ? "text-white" : "text-gray-700"}`}
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
    </div>
  );
}

export { AboutMe };
