import { useSelector } from "react-redux";
import { ContactCard, SectionDescription, SectionTitle } from "./";
import { ThemeSwitcher } from "./theme-switcher";

function AboutMe() {
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === "dark";
  const GRAVATAR_HASH = process.env.REACT_APP_GRAVATAR_HASH;
  const avatarImagePath = `https://www.gravatar.com/avatar/${GRAVATAR_HASH}?s=280`;
  const isLargeScreen = window.innerWidth >= 1024;
  const isMobile = window.innerWidth <= 375;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-1 sm:my-12" id="aboutme">
        <div className="self-end mb-4 mr-8" id="switch-small">
          <ThemeSwitcher />
        </div>
        <div
          className={`lg:flex ${darkMode && isLargeScreen && "bg-gray-700"} ${
            !darkMode && isLargeScreen && "bg-gray-200"
          } py-4`}
        >
          <div className="flex flex-col self-center m-auto sm:mt-12">
            <div id="myinfo" className="rounded-3xl">
              <div>
                <h1 className="font-semibold text-center text-3xl md:text-4xl mx-auto">
                  <span
                    className={`${darkMode ? "text-white" : "text-gray-700"}`}
                  >
                    <span
                      className={`text-5xl sm:text-6xl mx-4 ${
                        darkMode
                          ? "text-yellow-400 font-bold"
                          : "text-yellow-500"
                      }`}
                    >
                      Jones Fernandes
                    </span>
                  </span>
                </h1>
                <p
                  className={`font-light ${
                    darkMode ? "text-white" : "text-gray-700"
                  } text-center text-2xl lg:text-4xl mx-2 mt-2`}
                >
                  <span>Fullstack Javascript</span> Developer
                </p>
              </div>
              {!isMobile && <ContactCard />}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col m-auto mx-8 sm:mx-12 items-center gap-1 sm:my-12 lg:my-32">
          <SectionTitle darkMode={darkMode} title="About me" />
          <SectionDescription
            darkMode={darkMode}
            description="I'm a trilingual Fullstack Javascript engineer specializing in React 
            and Node.JS with a passion for building easy-to-use innovative applications that 
            make people's lives easier."
          />
        </div>
        <div className="flex flex-col m-auto mx-8 sm:mx-12 items-center gap-1 sm:my-12 lg:my-32">
          <SectionTitle darkMode={darkMode} title="Hobbies" />
          <SectionDescription
            darkMode={darkMode}
            description="In my free time i like to go out with my wife, listen 
            to personal development podcasts, go to the gym and create personal 
            projects to improve my coding skills."
          />
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
