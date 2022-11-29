import React from 'react'
import { useState, useEffect } from "react";

const useAgeDiff = (sTime) => {
    const [totalTime, setTotalTime] = useState({ year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0 });
    const [startTime, setStartTime] = useState(new Date(sTime))

    const updateTime = () => {
        let startYear = startTime.getFullYear()
        let startMonth = startTime.getMonth()
        let startDate = startTime.getDate()
        let startHour = startTime.getHours()
        let startMinute = startTime.getMinutes()
        let startSecond = startTime.getSeconds()

        let stopTime = new Date()
        let stopYear = stopTime.getFullYear()
        let stopMonth = stopTime.getMonth()
        let stopDate = stopTime.getDate()
        let stopHour = stopTime.getHours()
        let stopMinute = stopTime.getMinutes()
        let stopSecond = stopTime.getSeconds()

        let year, month, day, hour, minute, second

        //get year
        year = stopYear - startYear;

        // get month
        if (stopMonth >= startMonth) {
            month = stopMonth - startMonth
        } else {
            year--
            month = 12 + stopMonth - startMonth
        }

        // get days
        if (stopDate >= startDate) {
            day = stopDate - startDate
        } else {
            month--
            day = 30 + stopDate - startDate
            if (month < 0) {
                month = 11
                year--
            }
        }
        // get hour
        if (stopHour >= startHour) {
            hour = stopHour - startHour
        } else {
            day--
            hour = 24 + stopHour - startHour
        }

        // get minute 
        if (stopMinute >= startMinute) {
            minute = stopMinute - startMinute
        } else {
            hour--
            minute = 60 + stopMinute - startMinute
        }

        // get second
        if (stopSecond >= startSecond) {
            second = stopSecond - startSecond
        } else {
            minute--
            second = 60 + stopSecond - startSecond
        }
        setTotalTime({ year: year, month: month, day: day, hour: hour, minute: minute, second: second })
    }
    

    return [totalTime, setStartTime, updateTime]
}

export default useAgeDiff