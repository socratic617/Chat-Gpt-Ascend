import { Card, CardHeader, CardBody, CardFooter, Image, Divider, User } from "@nextui-org/react";
import { useEffect, useState } from "react";
import rclogo from '../assets/skull.png'
import write from '../assets/write_icon.svg'
import settings from '../assets/settings_icon.svg'
import UserCard from './UserCard'


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
                <Card className="mt-2 chat-history">
                    <CardHeader className="flex gap-3 w-full">
                        <Image
                            alt="nextui logo"
                            height={30}
                            radius="sm"
                            src={rclogo}
                            width={30}
                        />
                        <div className="flex flex-col w-2/3 text-left">
                            <h3>New Chat</h3>
                        </div>
                        <Image
                            alt="nextui logo"
                            height={20}
                            radius="sm"
                            src={write}
                            width={20}
                            pagecolor="#ffffff"
                            bordercolor="#ffffff"
                        />
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="m-2">
                            <h4>Today</h4>
                            {messageHistory.map(message => {
                                if ((today == message.date.getTime())) {
                                    return <div
                                        className="m-2 border-1 rounded-2xl border-slate-700"
                                        key={message.id}
                                    >
                                        <a href="#">
                                            <p className="p-2">
                                                {message.summary}
                                            </p>
                                        </a>
                                    </div>
                                }
                            })}
                        </div>
                        <div className="m-2">
                            <h4>Yesterday</h4>
                            {messageHistory.map(message => {
                                if (betweenDays(yesterday, message.date)) {
                                    return <div
                                        className="m-2 border-1 rounded-2xl border-slate-700"
                                        key={message.id}
                                    >
                                        <a href="#">
                                            <p className="p-2">
                                                {message.summary}
                                            </p>
                                        </a>
                                    </div>
                                }
                            })}
                        </div>
                        <div className="m-2">
                            <div>
                                <h4>Past 7 Days</h4>
                            </div>
                            <div>
                                {messageHistory.map(message => {
                                    if (betweenDays(pastWeek, message.date)) {
                                        return <div
                                            className="m-2 border-1 rounded-2xl border-slate-700"
                                            key={message.id}
                                        >
                                            <a href="#">
                                                <p className="p-2">
                                                    {message.summary}
                                                </p>
                                            </a>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                        <div className="m-2">
                            <h4>Past 30 Days</h4>
                            {messageHistory.map(message => {
                                if (betweenDays(pastMonth, message.date)) {
                                    return <div
                                        className="m-2 border-1 rounded-2xl border-slate-700"
                                        key={message.id}
                                    >
                                        <a href="#">
                                            <p className="p-2">
                                                {message.summary}
                                            </p>
                                        </a>
                                    </div>
                                }
                            })}
                        </div>
                        <div className="m-2">
                            <h4>Past 90 Days</h4>
                            {messageHistory.map(message => {
                                if (betweenDays(pastThreeMonths, message.date) === true) {
                                    return <div
                                        className="m-2 border-1 rounded-2xl border-slate-700"
                                        key={message.id}
                                    >
                                        <a href="#">
                                            <p className="p-2">
                                                {message.summary}
                                            </p>
                                        </a>
                                    </div>
                                }
                            })}
                        </div>
                    </CardBody>
                    <Divider />
                    <UserCard
                            imgUser="https://i.pravatar.cc/150?u=a04258114e29026702d"
                            name="RC Student" />
                </Card>



            </div>

        </div>
    )
}