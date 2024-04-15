import { Button } from "@material-tailwind/react";
import { MoonIconFilled, SunIconFilled, SunIconEmpty, MoonIconEmpty } from "./DarkModeSVGs";


const ThemeSwitcher = ({ darkMode }) => {

  const buttonClass = darkMode.value ? "button-dark" : "button-light"
  const darkClassName = `rounded-full border-solid border-2	border-slate-700 ${buttonClass}`

  return (
    <>
      {darkMode.value ?
        <div className="flex w-max gap-4">
            <Button
              variant="text"
              className={darkClassName}
              type="button"
              onClick={darkMode.disable}
            >
              <SunIconFilled />
            </Button>
          <Button variant="text" className={darkClassName} type="button" onClick={darkMode.enable}>
            <MoonIconFilled />
          </Button>
        </div>
        :
        <div className="flex w-max gap-4">
          <Button variant="text" className="rounded-full" type="button" onClick={darkMode.disable}>
            <SunIconEmpty />
          </Button>
          <Button variant="text" className="rounded-full" color="black" type="button" onClick={darkMode.enable}>
            <MoonIconEmpty />
          </Button>
        </div>
      }
    </>
  );
};

export default ThemeSwitcher