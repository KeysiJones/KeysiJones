import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../app/darkModeSlice";

function ThemeSwitcher() {
  const dispatch = useDispatch();

  const switchOnColor = "#374151"; //Dark gray color
  const switchOnHandleColor = "#FBBF24"; //Gold yellow color
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === "dark";
  const switchClass = "text-yellow-400 text-2xl"

  return (
    <label className="text-right m-auto text-sm">
      <Switch
        onChange={() => {
          localStorage.setItem("theme", darkMode ? "light" : "dark");
          dispatch(switchTheme());
        }}
        checked={darkMode}
        onColor={switchOnColor}
        offColor={switchOnColor}
        className={switchClass}
        onHandleColor={switchOnHandleColor}
        checkedIcon={null}
        uncheckedIcon={null}
      />
    </label>
  );
}

export { ThemeSwitcher };
