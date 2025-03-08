"use client";
import Title from "@/utils/helpers/title";
import React, { useEffect, useState } from "react";

interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ days, hours, minutes, seconds }) => {
  const [time, setTime] = useState({
    days,
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      if (time.seconds > 0) {
        setTime((prevTime) => ({ ...prevTime, seconds: prevTime.seconds - 1 }));
      } else if (time.minutes > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          minutes: prevTime.minutes - 1,
          seconds: 59,
        }));
      } else if (time.hours > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          hours: prevTime.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (time.days > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          days: prevTime.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        }));
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [time]);

  return (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <p className="text-xs font-medium">Days</p>
        <Title>{`${time.days}`}</Title>
      </div>
      <div className="space-y-2">
        <hr className="w-1 h-1 bg-danger rounded-full" />
        <hr className="w-1 h-1 bg-danger rounded-full" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium">Hours</p>
        <Title>{`${time.hours}`}</Title>
      </div>
      <div className="space-y-2">
        <hr className="w-1 h-1 bg-danger rounded-full" />
        <hr className="w-1 h-1 bg-danger rounded-full" />
      </div>
      <div className="text-center">
        <p className="text-xs">Minutes</p>
        <Title>{`${time.minutes}`}</Title>
      </div>
      <div className="space-y-2">
        <hr className="w-1 h-1 bg-danger rounded-full" />
        <hr className="w-1 h-1 bg-danger rounded-full" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium">Seconds</p>
        <Title>{`${time.seconds}`}</Title>
      </div>
    </div>
  );
};

export default Timer;
