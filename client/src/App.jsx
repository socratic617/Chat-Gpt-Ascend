import React from "react";
import ChatbotContainer from "./components/ChatbotContainer";

export default function App() {
  return (
      <ChatbotContainer />
  );
}



// import React from "react";
// import { Input, Button, Card, CardBody, User, CardHeader, ScrollShadow } from "@nextui-org/react";

// export default function App() {

//   return (
//     //Parent Container for WHOLE PAGE
//     <div className="flex flex-col w-full">
    
//       <Card className="max-w-full w-[340px] h-[400px]">

//         {/*LOGGED IN USER USING CHATGPT */}
//         <User
//           className="pb-5 pt-5"
//           name="RC Student"
//           description="Software Engineer"
//           avatarProps={{
//             src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
//           }}
//         />

//         {/* CHATBOT CONTAINER BEGINS */}
//         <div className="flex flex-col gap-4">

//           {/* USER OUTPUT */}
//           <Input
//             isReadOnly
//             type="RC Student Output"
//             label="RC Student Output"
//             variant="bordered"
//             defaultValue="What does Pomodoro mean?"
//             // className="max-w-xs"
//             color="secondary"
//           />

//           {/* CHATBOT RESPONSE */}
//           <Input
//             isReadOnly
//             type="CHATGPT Output"
//             label="CHATGPT Output"
//             variant="bordered"
//             defaultValue="Pomodoro is ....."
//             // className="max-w-xs"
//             color="primary"
//           />
          
//           {/* USER INPUT CONTAINER BEGINS */}
//           <div key="bordered" className=" w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
//             <Input className="pb-5" type="email" variant="bordered" label="Insert Question Here:" />
//             <Button fullWidth color="primary">
//               Submit
//             </Button>
//           </div>
          
//         </div>
//       </Card>
//     </div>
//   );
// }
