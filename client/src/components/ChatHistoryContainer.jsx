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

    console.log("message history array", messageHistory)

    function sevenDays() {
        let date = new Date();
        date.setDate(date.getDate() - 7);
        return date;
    }

    const pastWeek = sevenDays()

    console.log("7 days ago", pastWeek)

    function oneDay() {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
    }

    const yesterday = oneDay()

    console.log("yesterday", yesterday)

    function thirtyDays() {
        let date = new Date();
        date.setDate(date.getDate() - 30);
        return date;
    }

    const pastMonth = thirtyDays()

    console.log("30 Days Ago", pastMonth)




    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }



    return (
        <div className="col-span-1">
            <div className={`${darkMode.value ? "dark" : "light"}`}>
                <Card className="pl-40 pr-40 mt-2">
                    Card
                </Card>
            </div>
        </div>
    )
}