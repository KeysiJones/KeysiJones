import { useSelector } from "react-redux";
import { ContactCard, SectionDescription, SectionTitle } from "./";
import { ThemeSwitcher } from "./theme-switcher";
import profilePicture from "../fotos/keysi-blue.jpg";

function AboutMe() {
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === "dark";
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row gap-1 sm:my-12"
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
                ? "bg-gradient-to-br from-yellow-400 to-cyan-500"
                : "bg-gradient-to-br from-yellow-400 to-yellow-300"
            } rounded-full`}
            alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
            src={profilePicture}
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col self-center m-auto sm:mt-12">
          <div className="self-center mb-4" id="switch-big">
            <ThemeSwitcher />
          </div>
          <div id="myinfo" className="rounded-3xl">
            <div>
              <h1 className="font-semibold text-center text-4xl md:text-6xl mx-auto">
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
                } text-center font-semibold text-2xl lg:text-5xl mx-2 mt-2`}
              >
                <span>Fullstack Javascript</span> Developer
              </p>
            </div>
            {window.innerWidth > 452 ? <ContactCard /> : null}
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
