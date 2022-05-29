import { useSelector } from "react-redux";
import { ContactCard, SectionDescription, SectionTitle } from "./";
import { ThemeSwitcher } from "./theme-switcher";

function AboutMe() {
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === "dark";
  const GRAVATAR_HASH = process.env.REACT_APP_GRAVATAR_HASH;
  const avatarImagePath = `https://www.gravatar.com/avatar/${GRAVATAR_HASH}`;

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-1 sm:my-12" id="aboutme">
        <div className="self-end mb-4 mr-8" id="switch-small">
          <ThemeSwitcher />
        </div>
        <div className="mx-auto">
          <img
            id="thug"
            className="rounded-full"
            alt="Foto de um jovem de 25 anos, de camiseta preta de manga curta e óculos preto"
            src={avatarImagePath}
          />
        </div>
        <div className="flex flex-col self-center m-auto sm:mt-12">
          <div id="myinfo" className="rounded-3xl">
            <div>
              <h1 className="font-semibold text-center text-3xl md:text-4xl mx-auto">
                <span
                  className={`${darkMode ? "text-white" : "text-gray-800"}`}
                >
                  Hi, i'm{" "}
                  <span
                    className={`${darkMode ? "text-yellow-400" : "text-yellow-400"
                      }`}
                  >
                    Jones
                  </span>
                </span>
              </h1>
              <p
                className={`${darkMode ? "text-white" : "text-gray-800"
                  } text-center font-semibold text-2xl lg:text-4xl mx-2 mt-2`}
              >
                <span>Fullstack Javascript</span> Engineer
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
            description="I'm a trilingual Fullstack Javascript engineer specializing in React 
            and Node.JS with a passion for building easy-to-use innovative applications that 
            make people's lives easier."
          />
        </div>
        <div>
          <SectionTitle title="Hobbies" />
          <SectionDescription
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
