import { Button } from "@material-tailwind/react";
import { MoonIconFilled, SunIconFilled, SunIconEmpty, MoonIconEmpty } from "./DarkModeSVGs";


const ThemeSwitcher = ({ darkMode }) => {

  const buttonClass = darkMode.value ? "button-dark" : "button-light"
  const darkClassName = `rounded-full border-solid border-1	border-gray-700 hover:border-gray-500 w-12 h-12 flex justify-center items-center p-2 ${buttonClass}`
  const lightClassName = "rounded-full border-solid border-1	border-black hover:border-gray-500 w-12 h-12 flex justify-center items-center p-2"

  return (
    <>
      <div className="flex w-full justify-center items-center mb-2 mt-2">
        {darkMode.value ?
          <div className="flex w-max gap-4">
            <Button
              data-testid="sunfilled"
              variant="text"
              className={darkClassName}
              type="button"
              onClick={darkMode.disable}
            >
              <SunIconFilled />
            </Button>
            <Button
              data-testid="moonfilled"
              variant="text"
              className={darkClassName}
              type="button"
              onClick={darkMode.enable}
            >
              <MoonIconFilled />
            </Button>
          </div>
          :
          <div className="flex w-max gap-4">
            <Button
              data-testid="sunempty"
              variant="text"
              className={lightClassName}
              type="button"
              onClick={darkMode.disable}
            >
              <SunIconEmpty />
            </Button>
            <Button
              data-testid="moonempty"
              variant="text"
              className={lightClassName}
              color="black"
              type="button"
              onClick={darkMode.enable}
            >
              <MoonIconEmpty />
            </Button>
          </div>
        }
      </div>
    </>
  );
};

export default ThemeSwitcher