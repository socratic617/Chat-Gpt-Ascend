import useDarkMode from "use-dark-mode";
import { Button } from "@material-tailwind/react";

const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false);

  return (
    <>

      <div>

        <Button type="button" onClick={darkMode.disable}>
          ☀
        </Button>
        <Button type="button" onClick={darkMode.enable}>
          ☾
        </Button>

      </div>
    </>
  );
};

export default ThemeSwitcher