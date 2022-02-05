import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { switchDarkMode } from "../app/darkModeSlice";

function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const darkMode = theme === "dark";

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
        className="text-yellow-400 text-2xl"
        onHandleColor="#34D399"
      />
    </label>
  );
}

export { ThemeSwitcher };
