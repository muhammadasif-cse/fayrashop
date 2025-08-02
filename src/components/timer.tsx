"use client";
import Title from "@/utils/helpers/title";
import React, { useEffect, useState } from "react";

interface TimerProps {
  timestamp: string | Date;
  onComplete?: () => void;
}

const Timer: React.FC<TimerProps> = ({ timestamp, onComplete }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  const calculateTimeLeft = () => {
    const targetDate = new Date(timestamp);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      setIsExpired(true);
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      if (onComplete) {
        onComplete();
      }
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTime({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateTimeLeft();

    const countdown = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(countdown);
  }, [timestamp]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  if (isExpired) {
    return (
      <div className="flex items-center gap-4 opacity-50">
        <div className="text-center">
          <p className="text-xs font-medium">Expired</p>
          <Title>00</Title>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="text-center">
        <p className="text-xs font-medium">Days</p>
        <Title>{formatNumber(time.days)}</Title>
      </div>
      <div className="space-y-2 mt-4">
        <hr className="w-1 h-1 bg-primary rounded-full" />
        <hr className="w-1 h-1 bg-primary rounded-full" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium">Hours</p>
        <Title>{formatNumber(time.hours)}</Title>
      </div>
      <div className="space-y-2 mt-4">
        <hr className="w-1 h-1 bg-primary rounded-full" />
        <hr className="w-1 h-1 bg-primary rounded-full" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium">Minutes</p>
        <Title>{formatNumber(time.minutes)}</Title>
      </div>
      <div className="space-y-2 mt-4">
        <hr className="w-1 h-1 bg-primary rounded-full" />
        <hr className="w-1 h-1 bg-primary rounded-full" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium">Seconds</p>
        <Title>{formatNumber(time.seconds)}</Title>
      </div>
    </div>
  );
};

export default Timer;
