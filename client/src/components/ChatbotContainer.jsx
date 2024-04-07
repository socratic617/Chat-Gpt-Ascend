import React, { useState } from "react";
import { Input, Button, Card, User } from "@nextui-org/react";

export default function ChatbotContainer() {
  const [messages, setMessages] = useState([
    {
      author: "RC Student",
      content: "What tools can I use to debug?",
      timestamp: new Date()
    },
    {
      author: "Chatbot",
      content: "Response 1",
      timestamp: new Date()
    },
    {
      author: "RC Student",
      content: "What is HTML?",
      timestamp: new Date()
    },
    {
      author: "Chatbot",
      content: "Response 2",
      timestamp: new Date()
    },
    {
      author: "RC Student",
      content: "What is CSS?",
      timestamp: new Date()
    },
    {
      author: "Chatbot",
      content: "Response 3",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = () => {
    const newMessage = {
      author: "RC Student",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Logic to get the chatbot response based on the input message
    // For demonstration purposes, I'm just adding a dummy response
    const dummyResponse = {
      author: "Chatbot",
      content: "Dummy Response",
      timestamp: new Date()
    };
    setMessages(prevMessages => [...prevMessages, dummyResponse]); // Add chatbot response after user message
    setInputMessage("");
  };

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full pl-20 pr-20 ">
        <User
          className="pb-5 pt-5"
          name="RC Student"
          description="Software Engineer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
        <div className="flex flex-col gap-4">
          {/* Display messages */}
          {messages.map((message, index) => (
            <div key={index}>
              <Input
                isReadOnly
                type={message.author === "RC Student" ? "RC Student Output" : "CHATGPT Output"}
                label={message.author}
                variant="bordered"
                value={message.content}
                color={message.author === "RC Student" ? "secondary" : "primary"}
              />
              <p className="text-xs text-gray-500 text-right">{message.timestamp.toLocaleString()}</p>
            </div>
          ))}
          {/* User input */}
          <div className="w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              className="pb-5"
              type="text"
              variant="bordered"
              label="Insert Question Here:"
              value={inputMessage}
              onChange={handleInputChange}
            />
            <Button fullWidth color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

