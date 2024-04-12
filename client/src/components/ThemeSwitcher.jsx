import { Button } from "@material-tailwind/react";
import { MoonIconFilled, SunIconFilled, SunIconEmpty, MoonIconEmpty } from "./DarkModeSVGs";


const ThemeSwitcher = ({ darkMode }) => {

  // console.log(darkMode)

  return (
    <>
      {darkMode.value ?
        <div className="flex w-max gap-4">
            <Button
              variant="text"
              className="rounded-full border-solid border-1	border-gray-700 hover:border-gray-500 w-12 h-12 flex justify-center items-center p-2"
              type="button"
              onClick={darkMode.disable}
            >
              <SunIconFilled />
            </Button>
          <Button 
          variant="text" 
          className="rounded-full border-solid border-1	border-gray-700 hover:border-gray-500 w-12 h-12 flex justify-center items-center p-2" 
          type="button" 
          onClick={darkMode.enable}
          >
            <MoonIconFilled />
          </Button>
        </div>
        :
        <div className="flex w-max gap-4">
          <Button 
          variant="text" 
          className="rounded-full border-solid border-1	border-black hover:border-gray-500 w-12 h-12 flex justify-center items-center p-2"
          type="button" 
          onClick={darkMode.disable}
          >
            <SunIconEmpty />
          </Button>
          <Button 
          variant="text" 
          className="rounded-full border-solid border-1 border-black hover:border-gray-500 w-12 h-12 flex justify-center items-center p-2"
          color="black" 
          type="button" 
          onClick={darkMode.enable}
          >
            <MoonIconEmpty />
          </Button>
        </div>
      }
    </>
  );
};

export default ThemeSwitcher