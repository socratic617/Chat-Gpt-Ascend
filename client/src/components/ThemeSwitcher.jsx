import { Button } from "@material-tailwind/react";
import { MoonIconFilled, SunIconFilled, SunIconEmpty, MoonIconEmpty } from "./DarkModeSVGs";


const ThemeSwitcher = ({ darkMode }) => {

  // console.log(darkMode)
  // console.log(`darkmode boolean ${darkMode.value}`)
  

  return (
    <div >
        {darkMode.value ?
          <div className="flex w-max gap-4">
            <Button aria-label="sunlight" variant="text" className="rounded-full" type="button" onClick={darkMode.disable}>
              <SunIconFilled />
            </Button>
            <Button aria-label="moonlight"variant="text" className="rounded-full" type="button" onClick={darkMode.enable}>
              <MoonIconFilled />
            </Button>
          </div>
           :
           <div className="flex w-max gap-4">
           <Button aria-label="sunlight" variant="text" className="rounded-full" type="button" onClick={darkMode.disable}>
             <SunIconEmpty />
           </Button>
           <Button aria-label="moonlight" variant="text" className="rounded-full" color="black" type="button" onClick={darkMode.enable}>
             <MoonIconEmpty />
           </Button>
         </div>
        }
    </div>
  );
};

export default ThemeSwitcher