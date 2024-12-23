import React, { useEffect, useState } from "react";
import "./WeddingCountdown.css"; // Import your CSS file

const WeddingCountdown = () => {
  const weddingDate = new Date("2025-02-08T00:00:00"); // Set your wedding date here
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = weddingDate - now;

      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Clear interval if countdown is finished
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [weddingDate]);

  return (
    <div className="simply-countdown">
      <div className="simply-section">
        <div>
          <span className="simply-amount">{timeLeft.days}</span>
          <span className="simply-word">Days</span>
        </div>
      </div>
      <div className="simply-section">
        <div>
          <span className="simply-amount">{timeLeft.hours}</span>
          <span className="simply-word">Hours</span>
        </div>
      </div>
      <div className="simply-section">
        <div>
          <span className="simply-amount">{timeLeft.minutes}</span>
          <span className="simply-word">Minutes</span>
        </div>
      </div>
      <div className="simply-section">
        <div>
          <span className="simply-amount">{timeLeft.seconds}</span>
          <span className="simply-word">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default WeddingCountdown;
