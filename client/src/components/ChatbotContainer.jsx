import React, { useState, useRef, useEffect } from "react";
import { Card, User, Textarea } from "@nextui-org/react";
import UserInput from "./UserInput";


export default function ChatbotContainer({ darkMode }) {
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
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null); // Ref for the messages container

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    updateMessagesContainerHeight(); // Update messages container height whenever messages change
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = () => {
    const newMessage = {
      author: "RC Student",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Logic to get the chatbot response based on the input message
    // For demonstration purposes, I'm just adding a dummy response
    const dummyResponse = {
      author: "Chatbot",
      content: "Dummy Response",
      timestamp: new Date()
    };
    setMessages((prevMessages) => [...prevMessages, dummyResponse]); // Add chatbot response after user message
    setInputMessage("");
  };

  // Function to update the height of the messages container based on its content
  const updateMessagesContainerHeight = () => {
    if (messagesContainerRef.current) {
      const containerHeight = messagesContainerRef.current.scrollHeight;
      messagesContainerRef.current.style.height = `${containerHeight}px`;
    }
  };

  return (
    <div className="col-span-3">
      <div className={`${darkMode.value ? "dark" : "light"}`}>
        <Card className="pl-40 pr-40 mt-2 chatbot-container">
          <User
            className="pb-5 pt-8"
            name="RC Student"
            description="Software Engineer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
            }}
          />
          <div
            className="messages-container mb-4 overflow-y-auto"
            style={{ maxHeight: "30rem" }}
            ref={messagesContainerRef} // Assign ref to the messages container
          >
            {/* Display messages */}
            {messages.map((message, index) => (
              <div key={index} className="message-container ">
                <div
                  className={
                    message.author === "Chatbot"
                      ? "chatbot-message"
                      : "user-message"
                  }
                >
                  <Textarea
                    className="pb-2 fullwidth"
                    isReadOnly
                    variant="bordered"
                    value={message.content}
                    label={message.author}
                    color={message.author === 'RC Student' ? 'secondary' : 'primary'}
                    minRows={1}
                    maxRows={2}
                  />
                </div>
                <p
                  className={
                    message.author === "Chatbot"
                      ? "text-xs text-gray-500 text-left"
                      : "text-xs text-gray-500 text-right"
                  }
                >
                  {message.timestamp.toLocaleString()}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* User input */}
          <UserInput
            inputMessage={inputMessage}
            handleInputChange={handleInputChange} //handles input from user
            handleSubmit={handleSubmit} // handles when the user submits a message
          />
        </Card>
      </div>
    </div>
  );
}