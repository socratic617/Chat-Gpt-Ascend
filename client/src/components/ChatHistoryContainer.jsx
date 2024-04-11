import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useEffect, useState } from "react";


export const ChatHistoryContainer = ({ darkMode }) => {

    const [messageHistory, setMessageHistory] = useState([
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: new Date(Date.now()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
        {
            id: Math.floor(Math.random() * 1000),
            summary: "previous chat conversation",
            date: randomDate(new Date(2024, 0, 1), new Date()),
        },
    ])

    console.log("message history array", messageHistory)


    // grab random date in the past month 
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }

    //Assign today's date to a variable
    const today = Date.now()

    //Calculate 7 days from the current date 

    function sevenDays() {
        let date = new Date();
        date.setDate(date.getDate() - 7);
        return date;
    }

    //Assign to variable 

    const pastWeek = sevenDays()

    console.log("7 days ago", pastWeek)



    //Calculate one day  from the current date 

    function oneDay() {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
    }

    //Assign to variable 

    const yesterday = oneDay()

    // console.log("yesterday", yesterday)

    //Calculate 30 days from the current date 

    function thirtyDays() {
        let date = new Date();
        date.setDate(date.getDate() - 30);
        return date;
    }

    //Assign to variable 

    const pastMonth = thirtyDays()

    // console.log("30 Days Ago", pastMonth)


    //Calculate 90 days from the current date 

    function ninetyDays() {
        let date = new Date();
        date.setDate(date.getDate() - 90);
        return date;
    }

    //Assign to variable 

    const pastThreeMonths = ninetyDays()

    // console.log("90 Days Ago", pastThreeMonths)

    //check if date of message history is between today's date and another date

    function betweenDays(startDate, checkDate) {
        const start = startDate.getTime()
        const end = Date.now()
        const check = checkDate.getTime()

        if ((start <= check) && (end > check)) {
            return true
        } else {
            return false
        }

    }



    return (
        <div className="col-span-1">
            <div className={`${darkMode.value ? "dark" : "light"}`}>
                <div>
                    <h4>Today</h4>
                    {messageHistory.map(message => {
                        if ((today == message.date.getTime())) {
                            return <Card key={message.id}>{message.summary} </Card>
                        }
                    })}
                </div>
                <div>
                    <h4>Yesterday</h4>
                    {messageHistory.map(message => {
                        if (betweenDays(yesterday, message.date)) {
                            return <Card key={message.id}>{message.summary} </Card>
                        }
                    })}
                </div>
                <div>
                    <h4>Past 7 Days</h4>
                    {messageHistory.map(message => {
                        if (betweenDays(pastWeek, message.date)) {
                            return <Card key={message.id}>{message.summary} </Card>
                        }
                    })}
                </div>
                <div>
                    <h4>Past 30 Days</h4>
                    {messageHistory.map(message => {
                        if (betweenDays(pastMonth, message.date)) {
                            return <Card key={message.id}>{message.summary} </Card>
                        }
                    })}
                </div>
                <div>
                    <h4>Past 90 Days</h4>
                    {messageHistory.map(message => {
                        if (betweenDays(pastThreeMonths, message.date) === true) {
                            return <Card key={message.id}>{message.summary} </Card>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}