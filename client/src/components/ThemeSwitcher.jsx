import useDarkMode from "use-dark-mode";
import { Button } from "@material-tailwind/react";
import { MoonIconFilled, SunIconFilled, SunIconEmpty, MoonIconEmpty } from "./DarkModeSVGs";


const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false);

  console.log(darkMode)


  return (
    <>

      <div>

        {darkMode.value ?
          <div className="flex w-max gap-4">
            <Button variant="text" className="rounded-full" type="button" onClick={darkMode.disable}>
              <SunIconFilled />
            </Button>
            <Button variant="text" className="rounded-full" type="button" onClick={darkMode.enable}>
              <MoonIconFilled />
            </Button>
          </div>
           :
           <div className="flex w-max gap-4">
           <Button  variant="text" className="rounded-full" type="button" onClick={darkMode.disable}>
             <SunIconEmpty />
           </Button>
           <Button variant="text" className="rounded-full" color="black" type="button" onClick={darkMode.enable}>
             <MoonIconEmpty />
           </Button>
         </div>
        }

      </div>
    </>
  );
};

export default ThemeSwitcher