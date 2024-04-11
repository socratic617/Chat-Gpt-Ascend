import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useEffect, useState } from "react";


export const ChatHistoryContainer = ({ darkMode }) => {

    const [messageHistory, setMessageHistory] = useState([
        {
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
    ])

    console.log(messageHistory)


    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }



    return (
        <div className={`${darkMode.value ? "dark" : "light"}`}>
            <Card className="pl-40 pr-40 mt-2">
                Card
            </Card>
        </div>
    )
}