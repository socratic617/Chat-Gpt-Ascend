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
            date: new Date(new Date().setDate(new Date().getDate()-1))
        },
    ])

    console.log("message history array", messageHistory)

    // grab random date in the past month 
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }

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

    function betweenDays (startDate, checkDate) {
        const start = startDate.getTime()
        const end = Date.now()
        const check = checkDate.getTime()

        if((start <= check) && (end > check)){
            return true
        } else {
            return false
        }
        
    }

    const testDate = messageHistory[6].date

    console.log('test date', testDate)

    console.log("check date test", betweenDays(pastWeek, testDate) )


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