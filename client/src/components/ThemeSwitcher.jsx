import { Button } from "@material-tailwind/react";
import { MoonIconFilled, SunIconFilled, SunIconEmpty, MoonIconEmpty } from "./DarkModeSVGs";


const ThemeSwitcher = ({ darkMode }) => {

  // console.log(darkMode)

  return (
    <>
        {darkMode.value ?
          <div className="flex w-max gap-4">
            <Button variant="text" className="rounded-full" type="button" onClick={darkMode.disable} style={{ backgroundColor: "black" }}>
              <SunIconFilled />
            </Button>
            <Button variant="text" className="rounded-full" type="button" onClick={darkMode.enable} style={{ backgroundColor: "black" }}> 
              <MoonIconFilled />
            </Button>
          </div>
           :
           <div className="flex w-max gap-4">
           <Button variant="text" className="rounded-full" type="button" onClick={darkMode.disable}>
             <SunIconEmpty />
           </Button>
           <Button variant="text" className="rounded-full" color="black" type="button" onClick={darkMode.enable} >
             <MoonIconEmpty />
           </Button>
         </div>
        }
    </>
  );
};

export default ThemeSwitcher