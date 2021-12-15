import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { switchDarkMode } from "../app/darkModeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const darkMode = theme === "dark";
  console.log(theme);
  return (
    <label className="text-right m-auto text-sm">
      <Switch
        onChange={() => {
          localStorage.setItem("theme", darkMode ? "light" : "dark");
          dispatch(switchDarkMode());
        }}
        checked={darkMode}
        onColor="#374151"
        offColor="#374151"
        uncheckedIcon={
          <FontAwesomeIcon
            icon={faMoon}
            size="1x"
            className="ml-1 mb-0.5 text-white"
          />
        }
        className="text-yellow-400 text-2xl"
        checkedIcon={<FontAwesomeIcon icon={faSun} size="1x" />}
        onHandleColor="#34D399"
      />
    </label>
  );
}

export { ThemeSwitcher };
